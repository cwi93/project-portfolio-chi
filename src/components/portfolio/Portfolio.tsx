import { useState } from "react";
import {
  CaseWrapper,
  CaseBlock,
  CaseAnchor,
  CaseContainer,
  CaseImage
} from "./Portfolio.styled";

import Modal from "../modal/Modal";

import Thirdera from "./images/Thirdera.png";
import ANWB from "./images/ANWB.png";
import DXC from "./images/DXC_Technology.png";
import Evident from "./images/Evident.png";
import EActive from "./images/E-Active.png";
import HongKongCity from "./images/HongKongCity_Shadow.png";

const casesArray = [
  {
    id: 6,
    company: "Thirdera",
    role: "Design Technologist",
    link: "https://www.thirdera.com/",
    logo: `${Thirdera}`,
    description:
      "At Thirdera I am capable of combining my eye for both UX and development. I’ve been helping customer to design and develop the most amazing and user friendly employee center portals.",
    skills: [
      "Service Now",
      "Figma",
      "Maze",
      "HTML",
      "CSS",
      "Javascript",
      "AngularJS",
      "Scrum"
    ]
  },
  {
    id: 5,
    company: "ANWB",
    role: "Frontend Developer",
    link: "https://www.anwb.nl",
    logo: `${ANWB}`,
    description:
      "My career at ANWB was very informative for me. Together with my team we were responsible for the ANWB Car domain. Here I’ve learned to develop in typescript with Preact as framework, utilizing Gitlab & Styled Components and participating in UX research session.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "Preact",
      "Styled Components",
      "LESS",
      "Gitlab",
      "Cypress",
      "Scrum"
    ]
  },
  {
    id: 4,
    company: "Fruition Partners / DXC",
    role: "Technical Consultant",
    link: "https://www.dxc.nl/",
    logo: `${DXC}`,
    description:
      "As technical consultant I was responsible for development in Service Now using HTML, CSS and Javascript. My main focus and specialization is building portals (front-end) in Service Now. It was also important to use my expertise in order to guide the customer or give the customer advise.",
    skills: ["Service Now", "HTML", "CSS", "Javascript", "AngularJS", "Scrum"]
  },
  {
    id: 3,
    company: "Evident",
    role: "Web Developer",
    link: "https://www.valtech.com/valtech-welcomes-evident/",
    logo: `${Evident}`,
    description:
      "As a developer I was responsible for solving issues from websites and helping the team with projects for different companies like “Hogeschool Utrecht”, “Staatsbosbeheer”, “Caldic”, “GITP” et cetera.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Sitecore",
      "Kentico",
      "LESS",
      "SASS",
      "Scrum"
    ]
  },
  {
    id: 2,
    company: "E-Active",
    role: "Intern / Web developer",
    link: "https://www.e-active.nl/",
    logo: `${EActive}`,
    description:
      "During my internship at e-Active I've learned to develop in Zend Framework (PHP), writing technical and functional designs and created a Search Engine Optimalization report for the website www.klik-info.nl.",
    skills: ["HTML", "CSS", "PHP", "Zend Framework", "Symfony"]
  },
  {
    id: 1,
    company: "HKC",
    role: "Web Developer / Content Creator",
    link: "https://www.hongkongcity-zwolle.nl/",
    logo: `${HongKongCity}`,
    description:
      "From 2012 till 2020 I've been voluntarly helping with creating posters for seasonal offers and I've been responsible for designing and developing the website. The website is build is HTML, CSS and Javascript (AngularJS).",
    skills: ["HTML", "CSS", "Javascript", "AngularJS"]
  }
];

export default function Portfolio() {
  //const isModalOpen = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState({
    isOpen: false,
    caseObject: {
      id: 0,
      company: "",
      role: "",
      link: "",
      logo: "",
      description: "",
      skills: [] as string[]
    }
  });
  const { isOpen, caseObject } = isModalOpen;

  return (
    <CaseContainer>
      <h1>MY PORTFOLIO</h1>
      <CaseWrapper>
        {casesArray.map((cases) => {
          return (
            <CaseBlock key={cases.company} className="cases">
              <CaseAnchor
                onClick={() =>
                  setModalOpen({
                    ...isModalOpen,
                    isOpen: true,
                    caseObject: { ...cases }
                  })
                }
              >
                <CaseImage
                  src={cases.logo}
                  alt={`${cases.company} Logo`}
                  className={`${cases.company}-logo logo-hover-floating`}
                />
                <hgroup className="case-block">
                  <p className="case-block-description">{cases.description}</p>
                  <h5 className="case-block-role">{cases.role}</h5>
                </hgroup>
              </CaseAnchor>
            </CaseBlock>
          );
        })}
        ;
      </CaseWrapper>
      <Modal
        isOpen={isOpen}
        caseObject={caseObject}
        onClose={() =>
          setModalOpen({
            ...isModalOpen,
            isOpen: false,
            caseObject: {
              id: 0,
              company: "",
              role: "",
              link: "",
              logo: "",
              description: "",
              skills: [] as string[]
            }
          })
        }
        hasCloseBtn={true}
      >
        <h1 className="modal-dialog-title">
          {caseObject.role} at{" "}
          <a
            className="modal-dialog-link company-link"
            href={caseObject.link}
            target="_blank"
          >
            {caseObject.company}
          </a>
        </h1>
        <p className="modal-dialog-p">{caseObject.description}</p>

        <p className="modal-dialog-skills skills-map">
          {caseObject.skills.map((skills) => (
            <span
              key={skills}
              className={`modal-dialog-skill-pill ${skills} skill-pill`}
            >
              {skills}
            </span>
          ))}
        </p>
      </Modal>
    </CaseContainer>
  );
}
