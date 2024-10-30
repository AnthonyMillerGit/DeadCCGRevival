import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #252A34;
  color: #EAEAEA;
`;

export const NavbarItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavbarItem = styled.a`
  color: #EAEAEA;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #08D9D6;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background-color: #252A34;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.a`
  color: #EAEAEA;
  text-decoration: none;
  padding: 0.5rem;
  display: block;
  transition: color 0.3s ease;

  &:hover {
    color: #FF2E63;
  }
`;