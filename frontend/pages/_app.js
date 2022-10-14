import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { Layout } from "../components";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  const client = new ApolloClient({
    uri:
      process.env.NODE_ENV === "production"
        ? "https://digital-university-capstone.herokuapp.com/graphql"
        : "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default App;
