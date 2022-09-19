import React from "react";
import {
  CaseBlock,
  CaseAnchor,
  CaseContainer,
  CaseImage
} from "./Portfolio.styled";

import ANWB from "./images/ANWB.png";
import Fruition from "./images/Fruition.png";
import Evident from "./images/Evident.png";
import EActive from "./images/E-Active.png";
import HongKongCity from "./images/HongKongCity.png";

const casesArray = [
  {
    id: "ANWB",
    title: "ANWB",
    link: "https://www.anwb.nl",
    logo: `${ANWB}`
  },
  {
    id: "Fruition Partners / DXC",
    title: "Fruition Partners / DXC",
    link: "https://www.fruitionpartners.nl/",
    logo: `${Fruition}`
  },
  {
    id: "Evident",
    title: "Evident",
    link: "https://www.valtech.com/valtech-welcomes-evident/",
    logo: `${Evident}`
  },
  {
    id: "E-Active",
    title: "E-Active",
    link: "https://www.e-active.nl/",
    logo: `${EActive}`
  },
  {
    id: "HKC",
    title: "HKC",
    link: "https://www.hongkongcity-zwolle.nl/",
    logo: `${HongKongCity}`
  }
];

export default function Portfolio() {
  return (
    <CaseContainer>
      {casesArray.map((cases) => {
        return (
          <CaseAnchor key={cases.id} className="cases">
            <CaseBlock href={cases.link}>
              <CaseImage
                src={cases.logo}
                alt={`${cases.title} Logo`}
                className={`${cases.title} Logo`}
              />
              <hgroup className="case-block">
                <h5 className="case-block-title">{cases.title}</h5>
              </hgroup>
            </CaseBlock>
          </CaseAnchor>
        );
      })}
    </CaseContainer>
  );
}
