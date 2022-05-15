import React from "react";
import { LoadImgContainer } from "./LoadImage.styled";

type imageProps = {
  image: string;
  imgAlt?: string;
  className: string;
};

const LoadImage = ({ image, imgAlt, className }: imageProps) => {
  return <LoadImgContainer src={image} alt={imgAlt} className={className} />;
};

export default LoadImage;
