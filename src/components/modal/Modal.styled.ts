import styled from "styled-components";

const ModalContainer = styled.dialog`
  height: fit-content;
  border: none;
  border-radius: 12px;
  box-shadow: -7px 12px 2px 1px rgb(117 100 124 / 9%);

  @media only screen and (max-width: 769px) {
    width: 80%;
    left: 10px;
  }

  @media only screen and (min-width: 769px) {
    width: 50%;
  }
`;

const CloseButton = styled.button`
  float: right;
  font-size: 24px;
  background: none;
  border: none;
  outline: none;
  color: #090979;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export { ModalContainer, CloseButton };
