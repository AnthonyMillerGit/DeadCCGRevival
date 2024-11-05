import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #252A34; /* Dark Gray-Blue */
  color: #EAEAEA; /* Light Gray */
  text-align: center;
  padding: 1.5rem 0;
  border-top: 2px solid #08D9D6; /* Teal accent for a subtle separator */
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled.a`
  color: #EAEAEA;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #FF2E63; /* Pink-Red hover effect */
  }
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;