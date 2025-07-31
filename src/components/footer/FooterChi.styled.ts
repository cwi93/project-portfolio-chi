import styled from "styled-components";

const FooterContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;

  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  nav {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    flex-wrap: wrap;
    gap: 1rem;
    z-index: 10;
    padding: 2rem 0;

    @media (max-width: 768px) {
      gap: 0.8rem;
      padding: 1.5rem 1rem;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 0.8rem;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      padding: 0.6rem;
    }
  }

  a:hover {
    opacity: 70%;
    transform: scale(1.15);
  }

  @media (hover: none) and (pointer: coarse) {
    a:hover {
      transform: none;
    }

    a:active {
      opacity: 80%;
      transform: scale(1.05);
    }
  }

  svg {
    width: 100%;
    height: 45px;

    @media (max-width: 768px) {
      height: 35px;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    -webkit-filter: brightness(40%);
    filter: brightness(40%);
    z-index: 1;

    @media (max-width: 768px) {
      object-position: center center;
      -webkit-filter: brightness(35%);
      filter: brightness(35%);
    }

    @media (max-width: 480px) {
      object-position: center center;
      -webkit-filter: brightness(30%);
      filter: brightness(30%);
    }

    @media (max-width: 360px) {
      -webkit-filter: brightness(25%);
      filter: brightness(25%);
    }

    @media (orientation: portrait) {
      object-position: center top;
    }

    @media (orientation: landscape) and (max-height: 600px) {
      object-position: center center;
    }
  }
`;

const ContactInfo = styled.div`
  position: absolute;
  z-index: 10;
  text-align: center;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    width: 95%;
    top: 50%;
    padding: 1.5rem;
    border-radius: 15px;
  }

  @media only screen and (min-width: 1200px) {
    top: 30%;
    padding: 3rem;
    max-width: 900px;
  }

  h1 {
    font-size: 3.5rem;
    color: #fff;
    margin: 0 0 1rem 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-weight: bold;

    @media (max-width: 1024px) {
      font-size: 3rem;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin: 0 0 0.8rem 0;
    }
  }

  p {
    color: #fff;
    font-size: 1.8rem;
    margin: 0 0 2rem 0;
    line-height: 1.5;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    font-weight: 500;

    @media (max-width: 1024px) {
      font-size: 1.6rem;
    }

    @media (max-width: 768px) {
      font-size: 1.4rem;
      margin: 0 0 1.5rem 0;
    }
  }

  nav {
    position: relative !important;
    bottom: auto !important;
    padding: 0 !important;
    margin-top: 1rem;
  }
`;

export { FooterContainer, ContactInfo };
