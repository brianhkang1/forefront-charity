import Image from '@/components/Image';
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

import SignupForm from '../SignupForm';

export default function Footer() {
  return (
    <footer className='flex min-h-[230px] flex-wrap items-center justify-center bg-teal-900 px-12 text-white not-xl:py-8 not-xl:text-center'>
      <div className='flex h-full w-[min(80rem,80vw)] flex-wrap items-center justify-between not-xl:flex-col'>
        <div>
          <SignupForm />
          <div className='mt-4 flex items-center gap-2 not-xl:-mt-4 not-xl:mb-4 not-xl:justify-center'>
            <a
              href={'https://www.linkedin.com/company/goforefront'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInLogoIcon
                className='cursor-pointer'
                width='1rem'
                height='1rem'
                color='white'
              />
            </a>

            <a
              href={'https://www.instagram.com/goforefront'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramLogoIcon
                className='cursor-pointer'
                width='1rem'
                height='1rem'
                color='white'
              />
            </a>

            <a
              href={'https://x.com/goforefront'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/icons/twitter-x-logo.svg'
                alt='Platinum Transparency Logo'
                fillWidth={13}
                fillHeight={13}
                className='cursor-pointer'
              />
            </a>
          </div>
        </div>

        <div className='min-w-83.75 text-center not-xl:mb-10'>
          <div>© 2025 by FOREFRONT Charity</div>
          <div>1178 Broadway #3107</div>
          <div>New York, NY, 10001</div>
          <div>contact@goforefront.org</div>
          <div>US 501(c)(3) Public Charity, EIN 47-3373120</div>
        </div>

        <div>
          <Image
            src='/icons/platinumTransparency.svg'
            alt='Platinum Transparency Logo'
            width={108}
            height={108}
          />
        </div>
      </div>
    </footer>
  );
}
