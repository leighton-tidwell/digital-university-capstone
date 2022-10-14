import Head from "next/head";

const Book = () => {
  return (
    <div>
      <Head>
        <title>Book - Name goes here</title>
        <meta name="description" content="Book detail page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Book</div>
    </div>
  );
};

export default Book;
