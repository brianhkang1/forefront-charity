'use client';

import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'medium' | 'large';
  color?: 'bg-teal-800' | 'bg-dark-gold';
}

const BUTTON_SIZE_STYLES = {
  medium: 'mx-3 my-0.75',
  large: 'mx-6 my-3',
};

export default function Button({
  children,
  size = 'medium',
  color = 'bg-teal-800',
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        'disabled:bg-gray flex cursor-pointer items-center justify-center rounded text-white disabled:cursor-not-allowed',
        color,
        className,
      )}
      {...props}
    >
      <div className={BUTTON_SIZE_STYLES[size]}>{children}</div>
    </button>
  );
}
