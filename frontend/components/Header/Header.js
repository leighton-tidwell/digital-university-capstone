import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import Search from "../Search";
import Image from "next/image";

const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #e1e4e8;
  display: flex;
  justify-content: center;
  padding: 16px 1rem;
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

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;
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
        <StyledLogo>
          <Link href="/" passHref>
            <a>
              <Image
                src="/DU-Logo-Mark.svg"
                alt="DU Capstone"
                width={45}
                height={45}
              />
            </a>
          </Link>
          <StyledTitle>Capstone</StyledTitle>
        </StyledLogo>
        {links.map((link) => (
          <Link href={link.href} key={link.title} passHref>
            <StyledLink active={pathname === link.href}>
              {link.title}
            </StyledLink>
          </Link>
        ))}
        <Search />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
