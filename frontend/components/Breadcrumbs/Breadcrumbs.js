import styled from "@emotion/styled";
import Link from "next/link";

const StyledBreadcrumbs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  margin-bottom: 1.5rem;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: "IBM Plex Sans", sans-serif;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  ${(props) => props.active && "font-weight: 600;"}
  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
    color: #0366d6;
  }
`;

const Breadcrumbs = ({ links }) => {
  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      {links.map((link, index) => (
        <StyledBreadcrumbs key={index}>
          <Link href={link.href} key={link.title} passHref>
            <StyledLink active={links.length - 1 === index}>
              {link.title}
            </StyledLink>
          </Link>
          {links.length - 1 !== index && <span>/</span>}
        </StyledBreadcrumbs>
      ))}
    </div>
  );
};

export default Breadcrumbs;
