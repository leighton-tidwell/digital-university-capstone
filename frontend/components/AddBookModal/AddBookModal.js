import { useForm } from "react-hook-form";
import { Modal } from "..";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin: 0;
  padding: 0;
`;

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const StyledInput = styled.input`
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: 300;
  font-family: "IBM Plex Sans", sans-serif;
  &:focus {
    outline: none;
    border-color: #0366d6;
  }
`;

const StyledTextArea = styled.textarea`
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: 300;
  font-family: "IBM Plex Sans", sans-serif;
  &:focus {
    outline: none;
    border-color: #0366d6;
  }
`;

const StyledCategoryDropdown = styled.select`
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: 300;
  font-family: "IBM Plex Sans", sans-serif;
  &:focus {
    outline: none;
    border-color: #0366d6;
  }
`;

const StyledFormControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
  margin: 0;
  padding: 0;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  background: #fff;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  font-family: "IBM Plex Sans", sans-serif;
  cursor: pointer;
  &:hover {
    color: #0366d6;
    border-color: #0366d6;
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
  color: red;
  font-size: 14px;
  font-weight: 600;
  font-family: "IBM Plex Sans", sans-serif;
  cursor: pointer;
`;

const AddBookModal = ({ isOpen, onClose }) => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} title="Add New Book" onClose={onClose}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormRow>
          <StyledLabel>Title</StyledLabel>
          <StyledInput name="title" {...register("title")} />
        </StyledFormRow>

        <StyledFormRow>
          <StyledLabel>Author</StyledLabel>
          <StyledInput name="author" {...register("author")} />
        </StyledFormRow>

        <StyledFormRow>
          <StyledLabel>Category</StyledLabel>
          <StyledCategoryDropdown name="category" {...register("category")}>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="programming">Programming</option>
            <option value="fantasy">Fantasy</option>
          </StyledCategoryDropdown>
        </StyledFormRow>

        <StyledFormRow>
          <StyledLabel>Cover Image URL</StyledLabel>
          <StyledInput name="coverUrl" {...register("coverUrl")} />
        </StyledFormRow>

        <StyledFormRow>
          <StyledLabel>Description</StyledLabel>
          <StyledTextArea
            rows={4}
            name="description"
            {...register("description")}
          />
        </StyledFormRow>

        <StyledFormControls>
          <StyledCancelButton type="button" onClick={onClose}>
            Cancel
          </StyledCancelButton>
          <StyledButton type="submit">Add Book</StyledButton>
        </StyledFormControls>
      </StyledForm>
    </Modal>
  );
};

export default AddBookModal;
