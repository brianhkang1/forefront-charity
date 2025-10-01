import Image from '@/components/Image';

import TextSponsor from './TextSponsor';
import Ameriprise from './assets/Ameriprise.png';
import Awe_Wonder from './assets/Awe_Wonder.png';
import Bluehouse from './assets/Bluehouse.png';
import DrArthurYeh from './assets/Dr_Arthur_Yeh.png';
import Hilltop from './assets/Hilltop.png';
import LaurelSociety from './assets/Laurel_Society.png';
import LibertyCoke from './assets/Liberty_Coke.png';
import RiverdellVision from './assets/Riverdell_Vision.png';
import SJ_Park from './assets/SJ_Park.png';
import WhitehallDental from './assets/Whitehall_Dental.jpg';

export default function SponsorLogos() {
  return (
    <section className='flex flex-col items-center bg-white py-10'>
      <div className='border-gold mb-8 w-[90%] rounded-lg border-4 px-6 py-10 not-md:px-3'>
        <h2>Sponsors</h2>
      </div>

      {/* DIAMOND SPONSORS */}
      <div className='flex w-[90%] flex-col items-center'>
        <div className='flex w-full items-center'>
          <div className='h-[1px] w-full flex-grow-1 border-1' />
          <div className='mx-5 rounded-lg bg-[#1e3a8a] p-4 text-2xl font-bold text-nowrap text-white not-md:text-xl'>
            DIAMOND SPONSOR
          </div>
          <div className='h-[1px] w-full flex-grow-1 border-1' />
        </div>

        <div className='py-12'>
          <TextSponsor className='text-6xl not-md:text-5xl'>
            <div>ANONYMOUS</div>
            <div>DONOR</div>
          </TextSponsor>
        </div>
      </div>

      {/* GOLD SPONSORS */}
      <div className='flex w-[90%] flex-col items-center'>
        <div className='flex w-full items-center'>
          <div className='h-[1px] w-full flex-grow-1 border-1' />
          <div className='bg-gold mx-5 rounded-lg p-4 text-2xl font-bold text-nowrap text-white not-md:text-xl'>
            GOLD SPONSOR
          </div>
          <div className='h-[1px] w-full flex-grow-1 border-1' />
        </div>

        <div className='grid grid-cols-2 items-center justify-center gap-5 pt-2 pb-12 not-md:pt-10'>
          <div className='flex items-center justify-center not-xl:col-span-2'>
            <TextSponsor className='text-5xl not-md:text-4xl'>
              <div>In Loving Memory of</div>
              <div>Dr. Ravi A. Patel</div>
            </TextSponsor>
          </div>

          <div className='flex h-[180px] w-[575px] items-center not-md:h-[140px] not-md:w-[460px] not-xl:col-span-2'>
            <Image
              src={DrArthurYeh}
              alt='Dr. Arthur Yeh & Associates'
              className='h-[100%] w-[100%]'
            />
          </div>

          <div className='col-span-2 flex justify-center'>
            <TextSponsor className='text-5xl not-md:text-4xl'>
              <div>George Hsieh &</div>
              <div>Josephine Koh</div>
            </TextSponsor>
          </div>
        </div>
      </div>

      {/* SILVER SPONSORS */}
      <div className='flex w-[90%] flex-col items-center'>
        <div className='flex w-full items-center'>
          <div className='h-[1px] w-full flex-grow-1 border-1' />
          <div className='mx-5 rounded-lg bg-[#8b949e] p-4 text-2xl font-bold text-nowrap text-white not-md:text-xl'>
            SILVER SPONSOR
          </div>
          <div className='h-[1px] w-full flex-grow-1 border-1' />
        </div>

        <div className='grid grid-cols-3 items-center justify-center gap-10 pt-4 pb-15 not-md:pt-10'>
          <div className='flex items-center justify-center not-lg:col-span-3'>
            <Image
              src={Ameriprise}
              alt='Ameriprise'
              className='max-h-[275px] max-w-[275px] object-contain'
            />
          </div>

          <div className='flex items-center justify-center not-lg:col-span-3'>
            <Image
              src={SJ_Park}
              alt='SJ Park Psychiatry'
              className='max-h-[275px] max-w-[275px] object-contain'
            />
          </div>

          <div className='flex items-center justify-center not-lg:col-span-3'>
            <Image
              src={Bluehouse}
              alt='Bluehouse Eyecare'
              className='max-h-[275px] max-w-[275px] object-contain'
            />
          </div>

          <div className='flex items-center justify-center not-lg:col-span-3'>
            <Image
              src={LibertyCoke}
              alt='Liberty Coca-Cola Beverages'
              className='max-h-[275px] max-w-[275px] object-contain'
            />
          </div>

          <div className='flex items-center justify-center not-lg:col-span-3'>
            <Image
              src={Hilltop}
              alt='Hilltop Acupuncture'
              className='h-[275px] max-w-[275px] object-contain'
            />
          </div>

          <div className='flex items-center justify-center not-lg:col-span-3'>
            <Image
              src={LaurelSociety}
              alt='Laurel Society'
              className='max-h-[275px] max-w-[275px] object-contain'
            />
          </div>

          <div className='col-span-3 flex items-center justify-center'>
            <Image
              src={Awe_Wonder}
              alt='Awe & Wonder'
              className='max-h-[275px] max-w-[275px] object-contain'
            />
          </div>
        </div>
      </div>

      {/* BRONZE SPONSORS */}
      <div className='flex w-[90%] flex-col items-center'>
        <div className='flex w-full items-center'>
          <div className='h-[1px] w-full flex-grow-1 border-1' />
          <div className='mx-5 rounded-lg bg-[#cd7f32] p-4 text-2xl font-bold text-nowrap text-white not-md:text-xl'>
            BRONZE SPONSOR
          </div>
          <div className='h-[1px] w-full flex-grow-1 border-1' />
        </div>

        <div className='mt-[-30px] grid grid-cols-4 items-center justify-center gap-12 pb-10 not-md:mt-0 not-md:pt-12 not-lg:grid-cols-2'>
          <div className='flex items-center justify-center'>
            <TextSponsor className='text-4xl not-md:text-3xl'>
              <div>The Patel</div>
              <div>Family</div>
            </TextSponsor>
          </div>

          <div className='flex items-center justify-center'>
            <Image
              src={WhitehallDental}
              alt='Whitehall Dental Arts'
              className='max-h-[250px] max-w-[250px] object-contain'
            />
          </div>

          <div className='flex items-center justify-center'>
            <TextSponsor className='text-4xl not-md:text-3xl'>
              <div>The Gelman</div>
              <div>Family</div>
            </TextSponsor>
          </div>

          <div className='flex items-center justify-center'>
            <Image
              src={RiverdellVision}
              alt='Riverdell Vision'
              className='h-[250px] max-w-[250px] object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
