import {
  ChiWaiContainer,
  ChiWaiIntro,
  ChiWaiImportImage,
  ChiWaiImage,
  ScrollDown
} from "./ChiWai.styled";

import Chi_Happy_Beach from "../../images/Chi_Happy_Beach.jpg";

export default function ChiWai() {
  return (
    <ChiWaiContainer>
      <ChiWaiIntro>
        <h1>HI THERE!</h1>
        <p>
          My name is Chi-Wai Ip and I am a Service Now Frontend developer. I am
          currently employed as Design Technologist at Thirdera where I am
          responsible for developing portals for employees. I am also involved
          in several design phases. Think of brainstorming, sketching, reviewing
          and presenting designs with or to all parties involved.
        </p>
      </ChiWaiIntro>
      <ChiWaiImage>
        <ChiWaiImportImage
          image={Chi_Happy_Beach}
          imgAlt="Chi_Happy_Beach"
          className="left_image Chi_Happy_Beach"
        />
      </ChiWaiImage>
      <ScrollDown>
        <i className="arrow"> </i>
      </ScrollDown>
    </ChiWaiContainer>
  );
}
