import LoadImg from "./LoadImage.styled";

export default function LoadImage({ image, imgAlt, className }) {
  return <LoadImg src={image} alt={imgAlt} className={className} />;
}
