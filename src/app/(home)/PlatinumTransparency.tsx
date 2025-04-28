import Image from '@/components/Image';
import SelectAnnualReport from '@/components/SelectAnnualReport';

export default function PlatinumTransparency() {
  return (
    <section className='bg-teal-logo-200 w-full rounded-xl py-8 not-md:px-3'>
      <h2 className='mb-4 text-center not-md:mb-6'>
        Proudly Platinum for Transparent Impact
      </h2>

      <div className='flex items-center justify-center gap-6 px-2 not-md:flex-col'>
        <div>
          <Image
            src='/icons/platinumTransparency.svg'
            alt='Platinum Transparency Logo'
            fillWidth={156}
            fillHeight={156}
          />
        </div>

        <div className='max-w-xl not-md:mx-[min(24px,2%)]'>
          <p className='mb-6 not-md:text-center'>
            We are proud to have a Platinum Seal of Transparency from Candid
            every year because at FOREFRONT Charity, transparency is at the
            heart of everything we do. Learn more by reading our annual reports.
          </p>

          <SelectAnnualReport />
        </div>
      </div>
    </section>
  );
}
