import HeaderNavigation from "./HeaderChi.styled";

export default function HeaderChi() {
	return (
		<HeaderNavigation className="topnav">
			<ul>
				<li>
					<a className="active" href="#home">
						Home
					</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</HeaderNavigation>
	);
}
