import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { github, linkedin, instagram } from "@fortawesome/react-fontawesome";

import FooterContainer from "./FooterChi.styled";

export default function FooterChi() {
	return (
		<FooterContainer>
			<nav>
				<Link to="https://github.com/cwi93" target="_blank">
					<FontAwesomeIcon icon={github} />
				</Link>
				<Link to="https://nl.linkedin.com/in/chi-wai-ip" target="_blank">
					<FontAwesomeIcon icon={linkedin} />
				</Link>
				<Link to="https://www.instagram.com/flylikeachi6/" target="_blank">
					<FontAwesomeIcon icon={instagram} />
				</Link>
			</nav>
		</FooterContainer>
	);
}
