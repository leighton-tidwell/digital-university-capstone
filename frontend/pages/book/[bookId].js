import { useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { useGetBook } from "../../api/books";
import {
  Book as BookCover,
  Breadcrumbs,
  RemoveBookModal,
  Section,
} from "../../components";
import { Edit, TrashCan } from "@carbon/icons-react";

const BookRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3rem;
  margin: 0;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
`;

const StyledTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  gap: 1rem;
`;

const StyledTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const StyledEditButton = styled.button`
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

const StyledRemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background: none;
  color: red;
  font-size: 14px;
  font-weight: 600;
  font-family: "IBM Plex Sans", sans-serif;
  cursor: pointer;
  &:hover {
    color: #cd0202;
  }
`;

const StyledAuthor = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const StyledDescriptionTitle = styled.h6`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const StyledDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
  max-width: 700px;
`;

const Book = ({ bookId }) => {
  const { bookLoading, bookError, book } = useGetBook(bookId);
  const [showRemoveBookModal, setShowRemoveBookModal] = useState(false);

  const breadcrumbs = [
    {
      title: "Books",
      href: "/",
    },
    {
      title: book.title,
      href: `/book/${book.id}`,
    },
  ];

  return (
    <>
      <Head>
        <title>Book - {book.title}</title>
        <meta name="description" content={book.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Breadcrumbs links={breadcrumbs} />
        {!bookLoading && !bookError && (
          <BookRow>
            <BookCover coverOnly book={book} />
            <BookInfo>
              <StyledTitleRow>
                <StyledTitle>{book.title}</StyledTitle>
                <StyledEditButton>
                  <Edit />
                  Edit
                </StyledEditButton>
                <StyledRemoveButton
                  onClick={() => setShowRemoveBookModal(true)}
                >
                  <TrashCan />
                  Remove
                </StyledRemoveButton>
              </StyledTitleRow>
              <StyledAuthor>
                {book.author.firstName} {book.author.lastName}
              </StyledAuthor>
              <StyledDescriptionTitle>Description</StyledDescriptionTitle>
              <StyledDescription>{book.description}</StyledDescription>
            </BookInfo>
          </BookRow>
        )}
      </Section>

      <RemoveBookModal
        book={book}
        isOpen={showRemoveBookModal}
        onClose={() => setShowRemoveBookModal(false)}
      />
    </>
  );
};

export default Book;

export async function getServerSideProps(context) {
  const { bookId } = context.params;

  return {
    props: {
      bookId,
    },
  };
}
