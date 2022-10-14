import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  flex: 0 1 40px;
  background: #1a1a1a;
  color: #fff;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  margin: 0;
`;

const StyledCopyRight = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCopyRight>
        &copy; {new Date().getFullYear()} Omni Federal – All Rights Reserved
      </StyledCopyRight>
    </StyledFooter>
  );
};

export default Footer;
