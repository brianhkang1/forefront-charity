'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { postToGoogleSheets } from '@/lib/googleSheets';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Dialog } from 'radix-ui';
import { useActionState, useEffect, useState } from 'react';

import Image from '../Image';
import SignUpSuccessImage from './assets/SignUp_Success.png';

export default function SignupForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(
    postToGoogleSheets,
    null,
  );

  useEffect(() => {
    if (state === 'success' || state === 'error') {
      setIsDialogOpen(true);
    }
  }, [state]);

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <h3 className='mb-3'>Get Email Updates</h3>
      <form
        className='flex flex-wrap items-end gap-3 not-xl:mb-10 not-xl:flex-col not-xl:items-center not-xl:gap-5'
        action={formAction}
      >
        <Input
          required
          label='First Name'
          id='firstName'
          name='firstName'
          placeholder='First Name'
        />

        <Input
          required
          label='Last Name'
          id='lastName'
          name='lastName'
          placeholder='Last Name'
        />

        <Input
          required
          label='Email Address'
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          width='w-[209px]'
        />

        <Button
          size='small'
          type='submit'
          disabled={isPending}
          loading={isPending}
        >
          Sign Up
        </Button>
      </form>

      <Dialog.Portal>
        <Dialog.Overlay className='data-[state=open]:animate-dialog-overlay-show fixed inset-0 z-3 bg-black/75' />
        <Dialog.Content className='data-[state=open]:animate-dialog-content-show fixed top-[45%] left-1/2 z-4 max-h-[70vh] w-[min(480px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-md not-md:max-w-[90vw] focus:outline-none'>
          {state === 'error' ? (
            <>
              <Dialog.Title className='mt-3 mb-1 text-2xl'>Oh no!</Dialog.Title>
              <div>Something went wrong. Please try again later.</div>
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
