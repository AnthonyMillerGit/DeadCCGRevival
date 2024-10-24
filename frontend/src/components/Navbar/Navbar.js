import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarItem } from './Navbar.styles';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarItem as={Link} to="/">Home</NavbarItem>
      <NavbarItem as={Link} to="/games">Games</NavbarItem>
      <NavbarItem as={Link} to="/about">About</NavbarItem>
    </NavbarContainer>
  );
}

export default Navbar;