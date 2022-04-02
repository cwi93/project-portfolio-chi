import { BrowserRouter } from "react-router-dom";
import LoadImage from "./components/loadImage/LoadImage";
import HeaderChi from "./components/header/HeaderChi";
import FooterChi from "./components/footer/FooterChi";
import "./styles/styles.styled.css";

export default function PorfolioChi() {
  return (
    <div className="PorfolioChi">
      <BrowserRouter>
        <HeaderChi />
      </BrowserRouter>
      <LoadImage
        image="./images/Chi_Happy_Beach.jpg"
        imgAlt="Chi_Happy_Beach"
        className="right"
      />
      <LoadImage
        image="./images/Chi_Tennis_Volley.jpg"
        imgAlt="Chi_Tennis_Volley"
        className="left"
      />
      <BrowserRouter>
        <FooterChi />
      </BrowserRouter>
    </div>
  );
}
