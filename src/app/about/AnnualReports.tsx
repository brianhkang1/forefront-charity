'use client';

import Image from '@/components/Image';
import SelectAnnualReport from '@/components/SelectAnnualReport';

export default function AnnualReports() {
  return (
    <section className='bg-teal-logo-200 w-full py-8'>
      <h2 className='mb-4 text-center not-md:mb-[24px] not-md:px-[16px]'>
        See Your Impact: Read our Annual Reports
      </h2>

      <div className='flex items-center justify-center gap-6 px-2 not-md:flex-col'>
        <div>
          <a
            href='https://www.guidestar.org/profile/47-3373120'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/icons/platinumTransparency.svg'
              alt='Platinum Transparency Logo'
              fillWidth={156}
              fillHeight={156}
            />
          </a>
        </div>

        <div className='max-w-xl not-md:mx-6'>
          <p className='mb-6 not-md:text-center'>
            FOREFRONT Charity earned Candid’s 2024 Platinum Seal of
            Transparency, a recognition of our commitment to openness and
            accountability. Dive into our annual reports to see how your support
            is creating real, lasting change.
          </p>

          <SelectAnnualReport />
        </div>
      </div>
    </section>
  );
}
