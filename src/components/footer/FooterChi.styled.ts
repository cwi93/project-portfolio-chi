import styled from "styled-components";

const FooterContainer = styled.div`
  position: relative;

  @media only screen and (min-width: 768px) {
    padding-top: 24px;
  }

  nav {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 0;
    width: 100%;
  }
  a {
    color: #dfc0eb;
    text-decoration: none;
    padding-right: 15px;
  }

  a:hover {
    opacity: 50%;
  }

  svg {
    width: 100%;
    height: 45px;
  }

  img {
    position: relative;
    -webkit-filter: brightness(20%);
    filter: brightness(50%);
    filter: alpha(opacity=50); /* For IE8 and earlier */
  }
`;

const ContactInfo = styled.div`
  position: absolute;
  z-index: 1;
  text-align: center;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 3rem;
    color: #dfc0eb;
  }

  p {
    color: #dfc0eb;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 24px;
  }
`;

export { FooterContainer, ContactInfo };
