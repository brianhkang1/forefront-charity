'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { postToGoogleSheets } from '@/lib/googleSheets';
import { EVENT_NAME, PATHNAME_TO_PAGE, SECTION } from '@/utils/trackEvent';
import { Cross2Icon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
import { Dialog } from 'radix-ui';
import { useActionState, useEffect, useState } from 'react';

import Image from '../Image';
import SignUpSuccessImage from './assets/SignUp_Success.png';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}

export default function SignupForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaReady, setCaptchaReady] = useState(false);
  const [state, formAction, isPending] = useActionState(
    postToGoogleSheets,
    null,
  );
  const pathname = usePathname();
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const currentPage =
    PATHNAME_TO_PAGE[pathname as keyof typeof PATHNAME_TO_PAGE];

  useEffect(() => {
    if (!recaptchaSiteKey) {
      return;
    }

    const scriptId = 'google-recaptcha-v3-script';
    const existingScript = document.getElementById(scriptId) as
      | HTMLScriptElement
      | undefined;

    const initializeRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => setCaptchaReady(true));
      }
    };

    if (existingScript) {
      initializeRecaptcha();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = initializeRecaptcha;
    document.body.appendChild(script);
  }, [recaptchaSiteKey]);

  useEffect(() => {
    if (
      state === 'success' ||
      state === 'error' ||
      state === 'captcha_failed'
    ) {
      setIsDialogOpen(true);
    }
  }, [state]);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    if (!recaptchaSiteKey || !window.grecaptcha) {
      return;
    }

    const form = event.currentTarget;

    const hiddenField = form?.elements?.namedItem?.(
      'g-recaptcha-response',
    ) as HTMLInputElement | null;

    if (hiddenField && hiddenField.value) {
      return;
    }

    event.preventDefault();

    try {
      const token = await window.grecaptcha.execute(recaptchaSiteKey, {
        action: 'signup',
      });
      setCaptchaToken(token);

      if (hiddenField) {
        hiddenField.value = token;
      }

      form.requestSubmit();
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      setIsDialogOpen(true);
    }
  };

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <h3 className='mb-3'>Get Email Updates</h3>
      <form
        className='flex flex-wrap items-end gap-3 not-xl:mb-10 not-xl:flex-col not-xl:items-center not-xl:gap-5'
        action={formAction}
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='g-recaptcha-response' value={captchaToken} />

        <Input
          required
          label='First Name'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          className='not-xl:text-center'
        />

        <Input
          required
          label='Last Name'
          id='lastName'
          name='lastName'
          placeholder='Last Name'
          className='not-xl:text-center'
        />

        <Input
          required
          label='Email Address'
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          width='w-[209px]'
          className='not-xl:text-center'
        />

        <Button
          size='small'
          type='submit'
          disabled={isPending || !captchaReady}
          loading={isPending}
          trackEventParams={{
            name: EVENT_NAME.SIGN_UP_BUTTON_CLICK,
            page: currentPage,
            section: SECTION.FOOTER,
          }}
        >
          Sign Up
        </Button>
      </form>

      <Dialog.Portal>
        <Dialog.Overlay className='data-[state=open]:animate-dialog-overlay-show fixed inset-0 z-3 bg-black/75' />
        <Dialog.Content className='data-[state=open]:animate-dialog-content-show fixed top-[45%] left-1/2 z-4 max-h-[70vh] w-[min(480px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-md not-md:max-w-[90vw] focus:outline-none'>
          {state === 'error' || state === 'captcha_failed' ? (
            <>
              <Dialog.Title className='mt-3 mb-1 text-2xl'>Oh no!</Dialog.Title>
              <div>
                {state === 'captcha_failed'
                  ? 'Please complete the verification check and try again.'
                  : 'Something went wrong. Please try again later.'}
              </div>
            </>
          ) : (
            <>
              <Image
                src={SignUpSuccessImage}
                className='h-[350px] w-full rounded-lg'
                alt='Students waving'
              />
              <Dialog.Title className='mt-3 mb-1 text-2xl'>
                See you soon!
              </Dialog.Title>

              <div>
                Thanks for signing up! We look forward to seeing you in your
                email inbox soon.{' '}
              </div>
            </>
          )}

          <Dialog.Close asChild>
            <button
              className='hover:bg-forefront-teal/20 absolute top-6 right-9 inline-flex size-8 appearance-none items-center justify-center rounded-full text-black hover:cursor-pointer hover:text-teal-700 focus:outline-none'
              aria-label='Close'
            >
              <Cross2Icon width='1.5rem' height='1.5rem' />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
