import {ReactEventHandler, useState} from "react";

interface IImageLoaded {
  isImageLoaded: boolean;
  onLoadHandler: ReactEventHandler<HTMLImageElement>;
}

export const useImageLoaded = (): IImageLoaded => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    // This function will be called when the image has successfully loaded
    setImageLoaded(true);
  };

  return {
    isImageLoaded: imageLoaded,
    onLoadHandler: handleImageLoad
  };
};