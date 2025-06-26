import styled from "styled-components";

const ModalContainer = styled.dialog`
  width: 50%;
  height: fit-content;
  border: none;
  border-radius: 12px;
  box-shadow: -7px 12px 2px 1px rgb(117 100 124 / 9%);
`;

const CloseButton = styled.button`
  float: right;
  font-size: 24px;
  background: none;
  border: none;
  outline: none;
  color: #dfc0eb;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export { ModalContainer, CloseButton };
