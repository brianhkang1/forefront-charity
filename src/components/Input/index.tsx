'use client';

import clsx from 'clsx';
import { Label as RadixLabel } from 'radix-ui';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  width = 'w-[165px]',
  className,
  ...props
}: Props) {
  return (
    <div>
      <RadixLabel.Root className='mb-2 block text-sm' htmlFor={props.id}>
        {label}
      </RadixLabel.Root>
      <input
        className={clsx(
          'placeholder-gray inline-flex h-8 items-center justify-center rounded bg-white px-1 py-1.5 text-[14px]',
          width,
          className,
        )}
        {...props}
      />
    </div>
  );
}
