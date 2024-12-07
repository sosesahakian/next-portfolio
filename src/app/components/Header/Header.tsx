import React from "react";
import HeaderLink from "../HeaderLink";
import { Nav, Container, Routes, List } from "./Header.styled";

const Header = () => {
  const navLinks = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <Nav>
      <Container>
        <Routes id="navbar">
          <List>
            {navLinks.map((link, index) => (
              <li key={index}>
                <HeaderLink href={link.href} title={link.title} />
              </li>
            ))}
          </List>
        </Routes>
      </Container>
    </Nav>
  );
};

export default Header;
