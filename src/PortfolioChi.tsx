import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import LoadImage from "./components/loadImage/LoadImage";
import HeaderChi from "./components/header/HeaderChi";
import Portfolio from "./components/portfolio/Portfolio";
import FooterChi from "./components/footer/FooterChi";

import { PorfolioChiContainer } from "./styles/Styles.styled";

export default function PorfolioChi() {
  useEffect(() => {
    document.body.style.margin = "0";
  });

  return (
    <PorfolioChiContainer>
      <BrowserRouter>
        <HeaderChi />
      </BrowserRouter>
      <LoadImage
        image={require("./images/Chi_Happy_Beach.jpg")}
        imgAlt="Chi_Happy_Beach"
        className="left_image Chi_Happy_Beach"
      />
      <Portfolio />
      <LoadImage
        image={require("./images/Chi_Tennis_Volley.jpg")}
        imgAlt="Chi_Tennis_Volley"
        className="right_image Chi_Tennis_Volley"
      />
      <BrowserRouter>
        <Portfolio />
      </BrowserRouter>
      <BrowserRouter>
        <FooterChi />
      </BrowserRouter>
    </PorfolioChiContainer>
  );
}
