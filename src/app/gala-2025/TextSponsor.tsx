import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className: string;
}

export default function TextSponsor({ children, className }: Props) {
  return (
    <div className='flex flex-wrap items-center justify-center gap-5'>
      <div className={clsx('font-libre-baskerville text-center', className)}>
        {children}
      </div>
    </div>
  );
}
