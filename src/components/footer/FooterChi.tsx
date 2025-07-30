import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import LoadImage from "../../components/loadImage/LoadImage";
import { FooterContainer, ContactInfo } from "./FooterChi.styled";

import Chi_Tennis_Volley from "../../images/Chi_Tennis_Volley.jpg";

export default function FooterChi() {

  return (
    <FooterContainer>
      <ContactInfo>
        <h1>Contact Me ;)</h1>
        <p>Reach out to me via one of my social channels</p>
        <nav>
          <Link to="https://github.com/cwi93" target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://nl.linkedin.com/in/chi-wai-ip" target="_blank">
            <FaLinkedin />
          </Link>
          <Link to="https://www.instagram.com/flylikeachi6/" target="_blank">
            <FaInstagram />
          </Link>
        </nav>
      </ContactInfo>
      <LoadImage
        image={Chi_Tennis_Volley}
        imgAlt="Chi_Tennis_Volley"
        className="Chi_Tennis_Volley"
      />
    </FooterContainer>
  );
}
