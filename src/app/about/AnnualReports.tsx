'use client';

import PlatinumTransparencyImg from '@/components/PlatinumTransparencyImg';
import SelectAnnualReport from '@/components/SelectAnnualReport';
import { PAGE } from '@/utils/trackEvent';

export default function AnnualReports() {
  return (
    <section className='bg-teal-logo-200 w-full py-8'>
      <h2 className='mb-4 text-center not-md:mb-[24px] not-md:px-[16px]'>
        See Your Impact: Read our Annual Reports
      </h2>

      <div className='flex items-center justify-center gap-6 px-2 not-md:flex-col'>
        <div>
          <PlatinumTransparencyImg width={156} height={156} />
        </div>

        <div className='max-w-xl not-md:mx-6'>
          <p className='mb-6 not-md:text-center'>
            FOREFRONT Charity earned Candid’s 2024 Platinum Seal of
            Transparency, a recognition of our commitment to openness and
            accountability. Dive into our annual reports to see how your support
            is creating real, lasting change.
          </p>

          <SelectAnnualReport page={PAGE.ABOUT} />
        </div>
      </div>
    </section>
  );
}
