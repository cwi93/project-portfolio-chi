import { BrowserRouter } from "react-router-dom";
import HeaderChi from "./components/header/HeaderChi";
import "./styles/styles.styled.css";

export default function PorfolioChi() {
	return (
		<div className="PorfolioChi">
			<BrowserRouter>
				<HeaderChi />
			</BrowserRouter>
		</div>
	);
}
