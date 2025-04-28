import Image from '@/components/Image';

import Gallery1Image from './assets/Gallery1.png';
import Gallery2Image from './assets/Gallery2.png';
import Gallery3Image from './assets/Gallery3.png';
import Gallery4Image from './assets/Gallery4.png';
import Gallery5Image from './assets/Gallery5.png';
import Gallery6Image from './assets/Gallery6.png';
import Gallery7Image from './assets/Gallery7.png';
import Gallery8Image from './assets/Gallery8.png';

export default function WeAreFocused() {
  return (
    <section className='flex flex-col items-center'>
      <h3 className='mb-6 max-w-[1024px] text-center not-md:mx-6'>
        We are focused on reaching all parts of the world because we believe in
        a world where everyone has the essential resources to reach their full
        potential
      </h3>

      <div className='scrollbar-forefront max-w-[100vw] overflow-x-auto'>
        <div className='grid w-[1024px] grid-cols-3 justify-center gap-[16px]'>
          {/* Column 1 */}
          <div className='flex flex-wrap gap-[16px]'>
            <Image
              src={Gallery1Image}
              alt=''
              fillWidth={332}
              fillHeight={156}
              className='rounded-xl'
            />
            <Image
              src={Gallery2Image}
              alt=''
              fillWidth={156}
              fillHeight={156}
              className='rounded-xl'
            />
            <Image
              src={Gallery3Image}
              alt=''
              fillWidth={156}
              fillHeight={156}
              className='rounded-xl'
            />
          </div>

          {/* Column 2 */}
          <div className='flex flex-wrap gap-[16px]'>
            <Image
              src={Gallery4Image}
              alt=''
              fillWidth={156}
              fillHeight={336}
              className='rounded-xl'
            />
            <Image
              src={Gallery5Image}
              alt=''
              fillWidth={156}
              fillHeight={336}
              className='rounded-xl'
            />
          </div>

          {/* Column 3 */}
          <div className='flex flex-wrap gap-[16px]'>
            <Image
              src={Gallery6Image}
              alt=''
              fillWidth={156}
              fillHeight={156}
              className='aspect-square rounded-xl'
            />
            <Image
              src={Gallery7Image}
              alt=''
              fillWidth={156}
              fillHeight={156}
              className='aspect-square rounded-xl'
            />
            <Image
              src={Gallery8Image}
              alt=''
              fillWidth={332}
              fillHeight={156}
              className='aspect-[3/2] rounded-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
