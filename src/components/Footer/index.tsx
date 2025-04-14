import Image from '@/components/Image';

import SignupForm from '../SignupForm';

export default function Footer() {
  return (
    <footer className='flex min-h-57.75 flex-wrap items-center justify-between bg-teal-900 px-12 text-white not-md:flex-col not-md:py-8 not-md:text-center'>
      <div>
        <SignupForm />
      </div>

      <div className='min-w-83.75 text-center not-md:mb-10'>
        <div>© 2024 by FOREFRONT Charity</div>
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

      {/* TODO: Add social media icons and link */}
    </footer>
  );
}
