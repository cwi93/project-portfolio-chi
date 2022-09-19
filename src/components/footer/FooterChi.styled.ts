import styled from "styled-components";

const FooterContainer = styled.div`
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
`;

export default FooterContainer;
