import styled from "styled-components";

const FooterContainer = styled.div`
  nav {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    height: 1.5em;
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
`;

export default FooterContainer;
