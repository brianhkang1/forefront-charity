import clsx from 'clsx';
import NextImage, { ImageProps } from 'next/image';

type Props = {
  children?: React.ReactNode;
  containerStyle?: Record<string, string | number>;
  fillWidth?: string | number;
  fillHeight?: string | number;
  hideMobileContainer?: boolean;
  hideDesktopContainer?: boolean;
  includeOverlay?: boolean;
} & ImageProps;
// & Omit<ImageProps, 'width' | 'height'>;

export default function Image({
  children,
  className,
  fillWidth,
  fillHeight,
  containerStyle = {},
  includeOverlay,
  hideMobileContainer,
  hideDesktopContainer,
  ...props
}: Props) {
  return (
    <div
      style={{
        position: 'relative',
        width: fillWidth,
        height: fillHeight,
        ...containerStyle,
      }}
      className={clsx(
        hideMobileContainer && 'md:hidden',
        hideDesktopContainer && 'not-md:hidden',
      )}
    >
      <NextImage
        fill={!!fillWidth && !!fillHeight}
        draggable={false}
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
