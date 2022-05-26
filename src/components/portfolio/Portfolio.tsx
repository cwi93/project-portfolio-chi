import React from "react";
import { CaseBlock, CaseAnchor, CaseContainer } from "./Portfolio.styled";

const casesArray = [
  { title: "ANWB", link: "ANWB" },
  { title: "DXC", link: "DXC" },
  { title: "Evident", link: "Evident" },
  { title: "E-Active", link: "E-Active" },
  { title: "HKC", link: "HKC" },
  { title: "SBux", link: "SBUX" }
];

export default function Portfolio() {
  return (
    <CaseContainer>
      {casesArray.map((cases) => {
        return (
          <CaseAnchor className="cases">
            <CaseBlock href={cases.link}>{cases.title}</CaseBlock>
          </CaseAnchor>
        );
      })}
    </CaseContainer>
  );
}
