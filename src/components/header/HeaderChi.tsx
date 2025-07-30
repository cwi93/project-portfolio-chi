import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import HeaderNavigation from "./HeaderChi.styled";

export default function HeaderChi() {
  const { theme } = useTheme();
  
  return (
    <HeaderNavigation className="topnav" theme={theme}>
      <nav>
        <Link to="#ChiWai">Chi-Wai Ip</Link>
        {/*<Link to="#home">HOME</Link>
        <Link to="#about">ABOUT</Link>
  <Link to="#contact">CONTACT</Link>*/}
      </nav>
    </HeaderNavigation>
  );
}
