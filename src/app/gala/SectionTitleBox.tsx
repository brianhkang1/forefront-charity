import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitleBox({ children, className }: Props) {
  return (
    <div className='from-gold to-dark-gold mb-8 w-[90%] rounded-lg bg-gradient-to-r p-[4px] not-md:max-w-[340px]'>
      <div
        className={clsx('relative h-full w-full rounded bg-black', className)}
      >
        <div className='px-5 py-10'>{children}</div>
      </div>
    </div>
  );
}
