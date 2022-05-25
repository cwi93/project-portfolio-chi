import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import FooterContainer from "./FooterChi.styled";

export default function FooterChi() {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
}
