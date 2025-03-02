'use client';

export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className='disabled:bg-gray flex h-8 cursor-pointer items-center justify-center rounded bg-teal-800 text-white disabled:cursor-not-allowed'
      {...props}
    >
      <div className='mx-3'>{children}</div>
    </button>
  );
}
