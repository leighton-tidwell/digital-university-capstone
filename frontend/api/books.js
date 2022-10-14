import { gql, useQuery } from "@apollo/client";

export const useGetBooks = () => {
  const query = gql`
    query getBooks {
      getBooks {
        id
        title
        coverImage
        author {
          id
          firstName
          lastName
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(query);

  return {
    booksLoading: loading,
    booksError: error,
    books: data?.getBooks || [],
  };
};

export const useGetBook = (id) => {
  const query = gql`
    query getBook($id: ID!) {
      getBook(id: $id) {
        id
        title
        coverImage
        author {
          id
          firstName
          lastName
        }
        description
      }
    }
  `;

  const { loading, error, data } = useQuery(query, { variables: { id } });

  return {
    bookLoading: loading,
    bookError: error,
    book: data?.getBook || {},
  };
};
