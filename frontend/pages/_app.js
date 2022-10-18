import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { Layout } from "../components";
import { ToastProvider } from "../providers";
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
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </Layout>
    </ApolloProvider>
  );
};

export default App;
