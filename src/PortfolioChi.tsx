import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderChi from "./components/header/HeaderChi";
import ChiWai from "./components/chiwai/ChiWai";
import Portfolio from "./components/portfolio/Portfolio";
import FooterChi from "./components/footer/FooterChi";

import { useOutsideClick } from "./components/useOutsideClick/useOutsideClick";

import { PorfolioChiContainer } from "./styles/Styles.styled";

export default function PorfolioChi() {
  useEffect(() => {
    document.body.style.margin = "0";
  });

  const ref = useOutsideClick(() => {
    console.log("test portfolioChi");
  });

  return (
    <PorfolioChiContainer ref={ref} className="portfolio-container">
      <BrowserRouter>
        <HeaderChi />
      </BrowserRouter>
      <ChiWai />
      <Portfolio />
      <BrowserRouter>
        <FooterChi />
      </BrowserRouter>
    </PorfolioChiContainer>
  );
}
