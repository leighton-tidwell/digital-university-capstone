import styled from "@emotion/styled";
import Image from "next/image";
import { Add } from "@carbon/icons-react";

const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledEmptyStateText = styled.h6`
  font-size: 24px;
  font-weight: 300;
  color: #444;
  margin: 0px;
  margin-bottom: 0.5rem;
  font-family: "IBM Plex Sans", sans-serif;
  text-align: center;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid black;
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

const EmptyState = ({ text, buttonText, buttonCallback }) => {
  return (
    <StyledEmptyState>
      <Image src="/Empty.svg" width={200} height={200} />
      <StyledEmptyStateText>{text}</StyledEmptyStateText>
      <StyledButton onClick={buttonCallback}>
        <Add />
        {buttonText}
      </StyledButton>
    </StyledEmptyState>
  );
};

export default EmptyState;
