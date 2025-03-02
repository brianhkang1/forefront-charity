import NextImage, { ImageProps } from 'next/image';

type Props = {
  children?: React.ReactNode;
  containerStyle?: Record<string, string | number>;
  width: string | number;
  height: string | number;
} & Omit<ImageProps, 'width' | 'height'>;

export default function Image({
  children,
  className = ' ',
  width,
  height,
  containerStyle = {},
  ...props
}: Props) {
  return (
    <div style={{ position: 'relative', width, height, ...containerStyle }}>
      <NextImage
        fill
        sizes='100%'
        className={`object-cover ${className}`}
        {...props}
      />
      {children}
    </div>
  );
}
