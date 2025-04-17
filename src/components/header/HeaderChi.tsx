import { Link } from "react-router-dom";
import HeaderNavigation from "./HeaderChi.styled";

export default function HeaderChi() {
  return (
    <HeaderNavigation className="topnav">
      <nav>
        <Link to="#home">HOME</Link>
        <Link to="#about">ABOUT</Link>
        <Link to="#contact">CONTACT</Link>
      </nav>
    </HeaderNavigation>
  );
}
