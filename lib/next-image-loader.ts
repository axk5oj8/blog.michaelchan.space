import { ImageLoaderProps } from 'next/image';

export const loader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://res.cloudinary.com/dvcainh6a/image/upload/f_auto,w_${width},q_${
    quality || 75
  }/${src}`;
};
