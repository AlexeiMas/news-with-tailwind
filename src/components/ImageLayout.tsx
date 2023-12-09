import {HTMLAttributes, ReactElement} from "react";
import cn from "classnames";
import ImageSkeleton from "./Skeleton/ImageSkeleton.tsx";
import {useImageLoaded} from "@/helpers/hooks/useImageLoaded.ts";

interface IImageLayoutProps extends Pick<HTMLAttributes<HTMLImageElement>, "className"> {
  imgSrc: string | null;
  imgAlt: string;
  children: ReactElement<typeof ImageSkeleton>;
}

const ImageLayout = ({imgSrc, imgAlt, className, children}: IImageLayoutProps) => {
  const {isImageLoaded, onLoadHandler} = useImageLoaded();

  if (Array.isArray(children)) {
    throw new Error("Must be just one children element.");
  }

  if ((typeof children.type === "string") || (typeof children.type === "function" && children.type.name !== "ImageSkeleton")) {
    throw new Error("Received not compatible element.");
  }

  if (!imgSrc) {
    return (
      <>
        {children}
      </>
    );
  }

  return (
    <>
      <img
        className={cn("object-cover", isImageLoaded ? "block" : "hidden", className)}
        src={imgSrc}
        alt={imgAlt}
        onLoad={onLoadHandler}
      />
      {
        !isImageLoaded && children
      }
    </>
  );
};

export default ImageLayout;