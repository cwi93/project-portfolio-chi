import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderChi from "./components/header/HeaderChi";
import ChiWai from "./components/chiwai/ChiWai";
import Portfolio from "./components/portfolio/Portfolio";
import FooterChi from "./components/footer/FooterChi";
import ThemeToggle from "./components/themeToggle/ThemeToggle";

import { useOutsideClick } from "./components/useOutsideClick/useOutsideClick";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

import { PorfolioChiContainer } from "./styles/Styles.styled";

function PortfolioContent() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.margin = "0";
  });

  const ref = useOutsideClick(() => {
    console.log("test portfolioChi");
  });

  return (
    <PorfolioChiContainer ref={ref} className="portfolio-container" theme={theme}>
      <ThemeToggle />
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

export default function PorfolioChi() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
