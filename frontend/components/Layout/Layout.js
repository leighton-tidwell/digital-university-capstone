import Header from "../Header";
import Footer from "../Footer";
import styled from "@emotion/styled";

const StyledLayout = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
