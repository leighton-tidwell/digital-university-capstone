import styled from "@emotion/styled";
import { UserAvatar } from "@carbon/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import Search from "../Search";

const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #e1e4e8;
  display: flex;
  justify-content: center;
  padding: 16px 32px;
  z-index: 100;
  margin: 0;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  max-width: 1240px;
  margin: 0;
  gap: 32px;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;

const StyledLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: none;
  ${({ active }) => (active ? "color: #0366d6" : "color: #586069")};
  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

const links = [
  { title: "Books", href: "/" },
  { title: "Authors", href: "/authors" },
  { title: "Categories", href: "/categories" },
];

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledTitle>DU Capstone</StyledTitle>
        {links.map((link) => (
          <Link href={link.href} key={link.title} passHref>
            <StyledLink active={pathname === link.href}>
              {link.title}
            </StyledLink>
          </Link>
        ))}
        <Search />
        <UserAvatar size={32} />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
