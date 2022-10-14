import { gql } from 'apollo-server-express';

// Pre-seeded data
const books = [
  {
    id: '1',
    title: 'Harry Potter and the Chamber of Secrets',
    author: '1',
    categories: ['1', '2']
  }
];
const authors = [
  {
    id: '1',
    firstName: 'J.K.',
    lastName: 'Rowling',
    books: ['1']
  }
];
const categories = [
  {
    id: '1',
    name: 'Fantasy',
    books: ['1']
  },
  {
    id: '2',
    name: 'Fiction',
    books: ['1']
  }
];

export const typeDefs = gql`
  "An individual book, contains a title, author, and an array of category ids"
  type Book {
    id: ID!
    "The book's title"
    title: String!
    "The book's author (an ID)"
    author: Author!
    "The book's categories (array of IDs)"
    categories: [Category!]
  }

  "An individual author, contains a first name, last name, and an array of book ids."
  type Author {
    id: ID!
    "The author's first name"
    firstName: String
    "The author's last name"
    lastName: String
    "The author's books (array of IDs)"
    books: [Book!]
  }

  "An individual category, contains a name and an array of book ids."
  type Category {
    id: ID!
    "The category's name"
    name: String!
    "The category's books (array of IDs)"
    books: [Book!]
  }

  type Query {
    "Gets all of the stored books"
    getBooks: [Book!]!
    "Gets a book by its id"
    getBook(id: ID!): Book
    "Gets all of the stored authors"
    getAuthors: [Author!]!
    "Gets an author by its id"
    getAuthor(id: ID!): Author
    "Gets all of the stored categories"
    getCategories: [Category!]!
    "Gets a category by its id"
    getCategory(id: ID!): Category
  }

  type Mutation {
    "Creates a new book"
    addBook(title: String!, authorId: ID!, categoryIds: [ID!]!): Book
    "Updates a book"
    updateBook(
      id: ID!
      title: String!
      authorId: ID!
      categoryIds: [ID!]!
    ): Book
    "Removes a book by its id"
    removeBook(id: ID!): ID
    "Creates a new author"
    addAuthor(firstName: String!, lastName: String!): Author
    "Updates an author"
    updateAuthor(id: ID!, firstName: String!, lastName: String!): Author
    "Removes an author by its id"
    removeAuthor(id: ID!): ID
    "Creates a new category"
    addCategory(name: String!): Category
    "Updates a category"
    updateCategory(id: ID!, name: String!): Category
    "Removes a category by its id"
    removeCategory(id: ID!): ID
  }
`;

export const resolvers = {
  Book: {
    author: ({ author: authorId }) =>
      authors.find(author => author.id === authorId),
    categories: ({ categories: categoryIds }) =>
      categories.filter(category => categoryIds.includes(category.id))
  },
  Author: {
    books: ({ id: bookId }) => books.filter(book => book.id === bookId)
  },
  Category: {
    books: ({ id: bookId }) => books.filter(book => book.id === bookId)
  },
  Query: {
    getBooks: () => books,
    getBook: (_parent, { id }) => books.find(book => book.id === id),
    getAuthors: () => authors,
    getAuthor: (_parent, { id }) => authors.find(author => author.id === id),
    getCategories: () => categories,
    getCategory: (_parent, { id }) =>
      categories.find(category => category.id === id)
  },
  Mutation: {
    addBook: (_parent, { title, authorId, categoryIds }) => {
      const book = {
        id: String(books.length + 1),
        title,
        author: authorId,
        categories: categoryIds
      };
      books.push(book);
      return book;
    },
    addAuthor: (_parent, { firstName, lastName }) => {
      const author = {
        id: String(authors.length + 1),
        firstName,
        lastName
      };
      authors.push(author);
      return author;
    },
    addCategory: (_parent, { name }) => {
      const category = {
        id: String(categories.length + 1),
        name
      };
      categories.push(category);
      return category;
    },
    updateBook: (_parent, { id, title, authorId, categoryIds }) => {
      const bookIndex = books.findIndex(book => book.id === id);
      if (bookIndex === -1) throw new Error('This book does not exist.');
      const book = {
        id,
        title,
        author: authorId,
        categories: categoryIds
      };
      books[bookIndex] = book;

      return book;
    },
    updateAuthor: (_parent, { id, firstName, lastName }) => {
      const authorIndex = authors.findIndex(author => author.id === id);
      if (authorIndex === -1) throw new Error('This author does not exist.');
      const author = {
        id,
        firstName,
        lastName
      };
      authors[authorIndex] = author;
      return author;
    },
    updateCategory: (_parent, { id, name }) => {
      const categoryIndex = categories.findIndex(
        category => category.id === id
      );
      if (categoryIndex === -1)
        throw new Error('This category does not exist.');
      const category = {
        id,
        name
      };
      categories[categoryIndex] = category;
      return category;
    },
    removeBook: (_parent, { id }) => {
      const bookIndex = books.findIndex(book => book.id === id);
      if (bookIndex === -1) throw new Error('This book does not exist.');
      const [book] = books.splice(bookIndex, 1);
      return book.id;
    },
    removeAuthor: (_parent, { id }) => {
      const authorIndex = authors.findIndex(author => author.id === id);
      if (authorIndex === -1) throw new Error('This author does not exist.');
      const [author] = authors.splice(authorIndex, 1);
      return author.id;
    },
    removeCategory: (_parent, { id }) => {
      const categoryIndex = categories.findIndex(
        category => category.id === id
      );
      if (categoryIndex === -1)
        throw new Error('This category does not exist.');
      const [category] = categories.splice(categoryIndex, 1);
      return category.id;
    }
  }
};
