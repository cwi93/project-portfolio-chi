import { Link } from "react-router-dom";
import FooterContainer from "./FooterChi.styled";

export default function FooterChi() {
	return (
		<FooterContainer>
			<nav>
				<Link to="https://github.com/cwi93" target="_blank">
					Github
				</Link>
				<Link to="https://nl.linkedin.com/in/chi-wai-ip" target="_blank">
					LinkedIn
				</Link>
				<Link to="https://www.instagram.com/flylikeachi6/" target="_blank">
					Instagram
				</Link>
			</nav>
		</FooterContainer>
	);
}
