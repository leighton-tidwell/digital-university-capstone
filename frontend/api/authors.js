import { gql, useMutation } from "@apollo/client";

export const useAddAuthor = (firstName, lastName) => {
  const mutation = gql`
    mutation addAuthor($firstName: String!, $lastName: String!) {
      addAuthor(firstName: $firstName, lastName: $lastName) {
        id
        firstName
        lastName
      }
    }
  `;

  const [add, { loading, error, data }] = useMutation(mutation, {
    variables: { firstName, lastName },
  });

  return {
    addAuthor: (firstName, lastName) =>
      add({ variables: { firstName, lastName } }),
    addAuthorLoading: loading,
    addAuthorError: error,
    addAuthorData: data,
  };
};
