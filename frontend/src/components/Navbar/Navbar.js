import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarItem, NavbarItemsContainer, DropdownMenu, DropdownItem } from './Navbar.styles';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarItem as={Link} to="/">Home</NavbarItem>
      <NavbarItem as={Link} to="/games">Games</NavbarItem>
      <div 
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <NavbarItem>Post Types</NavbarItem>
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem as={Link} to="/post-types/card-review">Card Review</DropdownItem>
            <DropdownItem as={Link} to="/post-types/deck-tech">Deck Tech</DropdownItem>
            <DropdownItem as={Link} to="/post-types/new-cards">New Cards</DropdownItem>
          </DropdownMenu>
        )}
      </div>
      <NavbarItemsContainer>
        <NavbarItem as={Link} to="/about">About</NavbarItem>
        <NavbarItem as={Link} to="/contact">Contact</NavbarItem>
      </NavbarItemsContainer>
    </NavbarContainer>
  );
}

export default Navbar;