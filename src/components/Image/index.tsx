import clsx from 'clsx';
import NextImage, { ImageProps } from 'next/image';

type Props = {
  children?: React.ReactNode;
  containerStyle?: Record<string, string | number>;
  width: string | number;
  height: string | number;
  includeOverlay?: boolean;
} & Omit<ImageProps, 'width' | 'height'>;

export default function Image({
  children,
  className,
  width,
  height,
  containerStyle = {},
  includeOverlay,
  ...props
}: Props) {
  return (
    <div style={{ position: 'relative', width, height, ...containerStyle }}>
      <NextImage
        fill
        sizes='100%'
        className={clsx('object-cover', className)}
        {...props}
      />
      {includeOverlay && (
        <div className='absolute inset-0 bg-radial from-transparent to-teal-900' />
      )}
      {children}
    </div>
  );
}
