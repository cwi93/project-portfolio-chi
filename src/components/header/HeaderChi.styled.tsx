import styled from "styled-components";

const HeaderNavigation = styled.div`
	ul {
		float: right;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	li {
		padding-right: 2em;
	}

	/* Underline styles */
	a {
		color: #dfc0eb;
		font-size: 1.5rem;
		font-weight: bold;
		text-decoration: none;
		display: block;
		position: relative;
		padding: 0.4em 0;
	}

	/* Fade in */
	a::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0.15em;
		background-color: #dfc0eb;
		transition: opacity 300ms, transform 300ms;
	}

	/* Slide in */
	li a {
		overflow: hidden;
	}

	li a::after {
		opacity: 1;
		transform: translate3d(-100%, 0, 0);
	}

	li a:hover::after,
	li a:focus::after {
		transform: translate3d(0, 0, 0);
	}
`;

export default HeaderNavigation;
