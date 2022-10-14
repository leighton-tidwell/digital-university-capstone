import Head from "next/head";
import styled from "@emotion/styled";
import { useGetBooks } from "../api/books";
import { Book, Section } from "../components";

const BookRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3rem;
  margin: 0;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const Home = () => {
  const { booksLoading, booksError, books } = useGetBooks();

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
        <StyledTitle>My Library</StyledTitle>

        <BookRow>
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </BookRow>
      </Section>
    </>
  );
};

export default Home;
