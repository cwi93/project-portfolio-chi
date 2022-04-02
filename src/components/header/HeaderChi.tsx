import { Link } from "react-router-dom";
import HeaderNavigation from "./HeaderChi.styled";

export default function HeaderChi() {
	return (
		<HeaderNavigation className="topnav">
			<nav>
				<Link to="#home">Home</Link>
				<Link to="#about">About</Link>
				<Link to="#contact">Contact</Link>
			</nav>
		</HeaderNavigation>
	);
}
