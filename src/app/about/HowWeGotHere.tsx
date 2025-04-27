import clsx from 'clsx';

const HOW_WE_GOT_HERE = [
  { title: 2015, description: 'First Well in Pallapatla, India' },
  { title: 2016, description: 'Launched Handwashing Initiative' },
  { title: 2017, description: 'Identified land for our FOREFRONT School' },
  { title: 2018, description: 'Began building FOREFRONT School' },
  { title: 2019, description: 'Piloted a diabetes awareness workshop' },
  { title: 2020, description: 'Officially launched FOREFRONT School' },
  { title: 2021, description: 'Provided COVID relief with masks and food' },
  { title: 2022, description: 'Launched FOREFRONT Fearless' },
  { title: 2023, description: 'Launched newborn care' },
];

export default function HowWeGotHere() {
  return (
    <section className='relative mt-[-90px] w-full items-center bg-teal-800 text-white [clip-path:polygon(50%_0%,0_10%,0_100%,50%_90%,100%_100%,100%_10%)]'>
      <h3 className='pt-14 text-center'>How We Got Here</h3>

      <div className='scrollbar-forefront relative mx-auto h-[300px] w-full max-w-[1440px] overflow-x-auto'>
        {/* white line */}
        <div className='absolute top-[130px] left-0 h-[2px] w-[1440px] bg-white' />

        {HOW_WE_GOT_HERE.map(({ title, description }, index) => {
          const isEven = index % 2 === 0;
          const leftPosition = 160 * index;
          const topPosition = isEven ? 45 : 126;

          return (
            <div
              key={title}
              className={clsx(
                'absolute flex w-40 items-center',
                isEven ? 'flex-col' : 'flex-col-reverse',
              )}
              style={{ top: topPosition, left: leftPosition }}
            >
              <div className='min-h-[32px] text-center text-xs font-bold'>
                {description}
              </div>

              <div className='my-2 text-2xl font-bold'>{title}</div>

              {/* white dot */}
              <div className='h-2.75 w-2.75 rounded-full bg-white' />
            </div>
          );
        })}
      </div>

      {/* space filler */}
      <div className='h-[60px]' />
    </section>
  );
}
