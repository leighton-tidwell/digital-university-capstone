import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const StyledBook = styled.a`
  display: flex;
  flex-direction: column;
  width: 225px;
  height: min-content;
  gap: 0.5rem;
  text-decoration: none;
  color: #000;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
    color: #0366d6;
  }
`;

const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const StyledAuthor = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const Book = ({ book, coverOnly }) => {
  return (
    <>
      {coverOnly ? (
        <StyledBook>
          <Image
            src={book.coverImage}
            alt={book.title}
            width={225}
            height={300}
          />
        </StyledBook>
      ) : (
        <Link href={`/book/${book.id}`} passHref>
          <StyledBook>
            <Image
              src={book.coverImage}
              alt={book.title}
              width={225}
              height={300}
            />

            <StyledTitle>{book.title}</StyledTitle>
            <StyledAuthor>
              {book.author.firstName} {book.author.lastName}
            </StyledAuthor>
          </StyledBook>
        </Link>
      )}
    </>
  );
};

export default Book;
