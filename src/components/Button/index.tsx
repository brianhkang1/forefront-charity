'use client';

import clsx from 'clsx';

import Loading from '../Loading';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium';
  color?: 'bg-forefront-teal' | 'bg-white' | 'bg-dark-gold';
  loading?: boolean;
}

const BUTTON_SIZE_STYLES = {
  small: 'mx-3 my-1',
  medium: 'mx-6 my-3',
};

const TEXT_COLOR = {
  'bg-forefront-teal': 'text-black',
  'bg-dark-gold': 'text-white',
  'bg-white': 'text-black',
};

export default function Button({
  children,
  size = 'medium',
  color = 'bg-forefront-teal',
  className,
  loading,
  ...props
}: Props) {
  const textColor = TEXT_COLOR[color];

  return (
    <button
      className={clsx(
        'disabled:bg-gray cursor-pointer rounded disabled:cursor-not-allowed',
        color,
        textColor,
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          'flex items-center justify-center gap-2',
          BUTTON_SIZE_STYLES[size],
        )}
      >
        {children}
        {loading && <Loading />}
      </div>
    </button>
  );
}
