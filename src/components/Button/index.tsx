'use client';

import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium';
  color?: 'bg-forefront-teal' | 'bg-white' | 'bg-dark-gold';
}

const BUTTON_SIZE_STYLES = {
  small: 'mx-3 my-0.75',
  medium: 'mx-6 my-3',
};

const TEXT_COLOR = {
  'bg-forefront-teal': 'text-black',
  'bg-dark-gold': 'text-white',
  'bg-white': 'text-teal-800',
};

export default function Button({
  children,
  size = 'medium',
  color = 'bg-forefront-teal',
  className,
  ...props
}: Props) {
  const textColor = TEXT_COLOR[color];

  return (
    <button
      className={clsx(
        'disabled:bg-gray flex cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed',
        color,
        textColor,
        className,
      )}
      {...props}
    >
      <div className={BUTTON_SIZE_STYLES[size]}>{children}</div>
    </button>
  );
}
