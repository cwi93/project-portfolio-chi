import {
  ChiWaiContainer,
  ChiWaiIntro,
  ChiWaiImportImage,
  ChiWaiImage,
  ScrollDown
} from "./ChiWai.styled";
import { useTheme } from "../../contexts/ThemeContext";

import Chi_Japan from "../../images/Chi_Japan.png";

export default function ChiWai() {
  const { theme } = useTheme();

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <ChiWaiContainer>
      <ChiWaiIntro theme={theme}>
        <ChiWaiImage>
          <ChiWaiImportImage
            image={Chi_Japan}
            imgAlt="Chi_Japan"
            className="left_image Chi_Japan"
          />
        </ChiWaiImage>
        <h1>Hi there!</h1>
        <p className="one_sentence">
          My name is Chi-Wai Ip and I am a Service Now Frontend developer.{" "}
        </p>
        <p>
          I am currently employed as a Design Technologist at Thirdera, where I
          am responsible for developing employee-facing portals. In addition to
          development, I actively contribute to various design phases, including
          brainstorming, sketching, reviewing, and presenting designs in
          collaboration with all relevant stakeholders.
        </p>
        <p>
          Besides my expertise in UX and frontend development in Service Now, I
          am also specialised in IT Service Management. Which makes me a
          valueble and flexible Technical Consultant.
        </p>
        <ScrollDown theme={theme} onClick={scrollToPortfolio}>
          <i className="arrow"> </i>
        </ScrollDown>
      </ChiWaiIntro>
    </ChiWaiContainer>
  );
}
