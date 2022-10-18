import { Modal } from "..";
import styled from "@emotion/styled";
import { useRemoveBook } from "../../api/books";
import { useRouter } from "next/router";
import useToast from "../../hooks/useToast";

const StyledFormControls = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledConfirmationMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
  text-align: left;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid red;
  border-radius: 0.5rem;
  background: #fff;
  color: red;
  font-size: 14px;
  font-weight: 600;
  font-family: "IBM Plex Sans", sans-serif;
  cursor: pointer;
  &:hover {
    color: #cd0202;
    border-color: #cd0202;
  }
`;

const StyledCancelButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background: #fff;
  color: black;
  font-size: 14px;
  font-weight: 600;
  font-family: "IBM Plex Sans", sans-serif;
  cursor: pointer;
  &:hover {
    color: #0366d6;
    border-color: #0366d6;
  }
`;

const RemoveBookModal = ({ book, isOpen, onClose }) => {
  const { removeBook } = useRemoveBook();
  const router = useRouter();

  const [, setToast] = useToast();

  const handleRemoveBook = async () => {
    try {
      await removeBook({ variables: { id: book.id } });
    } catch (error) {
      console.error(error);
    }
    setToast({
      message: "Book removed successfully",
      type: "success",
    });
    router.push("/");
  };

  return (
    <Modal title="Remove Book" isOpen={isOpen} onClose={onClose}>
      <StyledConfirmationMessage>
        Are you sure you want to remove: <br /> <strong>{book.title}</strong>?
      </StyledConfirmationMessage>
      <StyledFormControls>
        <StyledButton onClick={handleRemoveBook}>Remove</StyledButton>
        <StyledCancelButton onClick={onClose}>Cancel</StyledCancelButton>
      </StyledFormControls>
    </Modal>
  );
};

export default RemoveBookModal;
