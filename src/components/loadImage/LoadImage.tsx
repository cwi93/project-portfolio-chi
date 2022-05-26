import React from "react";
import { ImgDiv, LoadImgContainer } from "./LoadImage.styled";

type imageProps = {
  image: string;
  imgAlt?: string;
  className: string;
};

const LoadImage = ({ image, imgAlt, className }: imageProps) => {
  return (
    <ImgDiv>
      <LoadImgContainer src={image} alt={imgAlt} className={className} />
    </ImgDiv>
  );
};

export default LoadImage;
