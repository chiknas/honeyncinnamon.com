import React from 'react';
import { default as NextImage } from 'next/image';

type ImageProps = Omit<
  React.ComponentProps<typeof NextImage>,
  'width' & 'height'
> & {
  imageRatioType: ImageRatioType;
};

export enum ImageRatioType {
  LANDSCAPE = 'lendscape',
}

type ImageRatio = {
  [key: string]: [width: string, height: string];
};

const imageRatios: ImageRatio = {
  [ImageRatioType.LANDSCAPE]: ['4032', '3024'],
};

export const Image: React.FunctionComponent<ImageProps> = ({
  imageRatioType,
  ...props
}) => {
  const [width, height] = imageRatios[imageRatioType];
  return (
    <NextImage width={width} height={height} layout="responsive" {...props} />
  );
};
