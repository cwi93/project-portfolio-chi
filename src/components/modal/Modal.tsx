import { useRef, useEffect, useState } from "react";
import { ModalContainer, CloseButton } from "./Modal.styled";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  caseObject: {
    id: number;
    company: string;
    role: string;
    link: string;
    logo: string;
    description: string;
    skills: string[];
  };
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  caseObject,
  isOpen,
  hasCloseBtn = true,
  onClose,
  children
}) => {
  const [isModalOpen, setModalOpen] = useState({ isOpen, caseObject });
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen({
      ...isModalOpen,
      isOpen: false,
      caseObject: {
        id: 0,
        company: "",
        role: "",
        link: "",
        logo: "",
        description: "",
        skills: []
      }
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen({
      ...isModalOpen,
      isOpen: isOpen,
      caseObject: {
        id: 0,
        company: "",
        role: "",
        link: "",
        logo: "",
        description: "",
        skills: []
      }
    });
  }, [isOpen, caseObject]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen.isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <ModalContainer
      ref={modalRef}
      className="modal-dialog-container"
      onKeyDown={handleKeyDown}
    >
      {hasCloseBtn && (
        <CloseButton className="modal-close-btn" onClick={handleCloseModal}>
          <FaTimes />
        </CloseButton>
      )}
      {children}
    </ModalContainer>
  );
};

export default Modal;
