import { useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { useGetBooks } from "../api/books";
import { Book, AddBookModal, EmptyState, Section } from "../components";

const BookRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3rem;
  margin: 1rem 0;
`;

const StyledControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
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

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const Home = () => {
  const { booksLoading, booksError, books } = useGetBooks();
  const [showNewBookModal, setShowNewBookModal] = useState(false);

  return (
    <>
      <Head>
        <title>DU Capstone</title>
        <meta
          name="description"
          content="Capstone project for Digital University Dev Team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <StyledControls>
          <StyledTitle>My Library</StyledTitle>
          <StyledButton onClick={() => setShowNewBookModal(true)}>
            <span>+</span>
            <span>Add Book</span>
          </StyledButton>
        </StyledControls>

        <BookRow>
          {!booksLoading && !booksError && books.length === 0 ? (
            <EmptyState
              text="You don't have any books in your library yet."
              buttonText="Add Book"
              buttonCallback={() => setShowNewBookModal(true)}
            />
          ) : (
            <>
              {books.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </>
          )}
        </BookRow>

        <AddBookModal
          isOpen={showNewBookModal}
          onClose={() => setShowNewBookModal(false)}
        />
      </Section>
    </>
  );
};

export default Home;
