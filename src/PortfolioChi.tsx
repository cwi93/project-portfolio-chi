import { BrowserRouter } from "react-router-dom";
import HeaderChi from "./components/header/HeaderChi";
import FooterChi from "./components/footer/FooterChi";
import "./styles/styles.styled.css";

export default function PorfolioChi() {
	return (
		<div className="PorfolioChi">
			<BrowserRouter>
				<HeaderChi />
				<FooterChi />
			</BrowserRouter>
		</div>
	);
}
