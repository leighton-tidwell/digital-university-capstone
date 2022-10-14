import styled from "@emotion/styled";
import { Search as SearchIcon } from "@carbon/icons-react";

const StyledSearchWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  margin: 0;
`;

const StyledSearch = styled.input`
  font-family: "IBM Plex Sans", sans-serif;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  font-size: 16px;
  padding: 8px 40px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #0366d6;
  }
`;

const Search = () => {
  return (
    <StyledSearchWrapper>
      <SearchIcon
        style={{
          position: "absolute",
          left: "12px",
          top: "0px",
          bottom: "0px",
          margin: "auto",
        }}
        size={20}
        color="#586069"
      />
      <StyledSearch placeholder="Search by title, author, or category" />
    </StyledSearchWrapper>
  );
};

export default Search;
