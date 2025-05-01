import {
  ChiWaiContainer,
  ChiWaiIntro,
  ChiWaiImportImage,
  ChiWaiImage,
  ScrollDown
} from "./ChiWai.styled";

import Chi_Japan from "../../images/Chi_Japan.png";

export default function ChiWai() {
  return (
    <ChiWaiContainer>
      <ChiWaiIntro>
        <h1>Hi there!</h1>
        <p className="one_sentence">
          My name is Chi-Wai Ip and I am a Service Now Frontend developer.{" "}
        </p>
        <p>
          I am currently employed as Design Technologist at Thirdera where I am
          responsible for developing portals for employees. I am also involved
          in several design phases. Think of brainstorming, sketching, reviewing
          and presenting designs with or to all parties involved.
        </p>
        <ScrollDown>
          <i className="arrow"> </i>
        </ScrollDown>
      </ChiWaiIntro>
      <ChiWaiImage>
        <ChiWaiImportImage
          image={Chi_Japan}
          imgAlt="Chi_Japan"
          className="left_image Chi_Japan"
        />
      </ChiWaiImage>
    </ChiWaiContainer>
  );
}
