import styled from "styled-components";

const HeaderNavigation = styled.div`
  nav {
    position: relative;
    float: right;
    list-style: none;
    display: flex;
    padding-top: 24px;
  }
  /* Underline styles */
  a {
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    display: block;
    position: relative;
    padding: 0.4em 0;

    @media only screen and (max-width: 769px) {
      margin-right: 24px;
    }
    @media only screen and (min-width: 769px) {
      margin-right: 15px;
    }
  }

  /* Fade in */
  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.15em;
    background-color: #fff;
    transition: opacity 300ms, transform 300ms;
  }

  /* Slide in */
  a {
    overflow: hidden;
  }

  a::after {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  a:hover::after,
  a:focus::after {
    transform: translate3d(0, 0, 0);
  }
`;

export default HeaderNavigation;
