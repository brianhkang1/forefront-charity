'use client';

import { Label as RadixLabel } from 'radix-ui';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, width = 'w-[165px]', ...props }: Props) {
  return (
    <div>
      <RadixLabel.Root className='mb-2 block text-sm' htmlFor={props.id}>
        {label}
      </RadixLabel.Root>
      <input
        className={`placeholder-gray inline-flex h-8 ${width} items-center justify-center rounded bg-white px-1 py-1.5 text-[14px]`}
        {...props}
      />
    </div>
  );
}
