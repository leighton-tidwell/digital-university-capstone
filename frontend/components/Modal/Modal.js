import styled from "@emotion/styled";
import { Close } from "@carbon/icons-react";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 0.75rem;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  gap: 1rem;
  min-width: 450px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const StyledModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #0366d6;
  }
`;

const Modal = ({ children, title, isOpen, onClose }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return isOpen ? (
    <ModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <StyledModalTitle>{title}</StyledModalTitle>
          <StyledCloseButton onClick={handleCloseClick}>
            <Close size={32} />
          </StyledCloseButton>
        </StyledModalHeader>
        {children}
      </StyledModal>
    </ModalOverlay>
  ) : null;
};

export default Modal;
