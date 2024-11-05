// Footer.js
import React from 'react';
import { FooterContainer, FooterLinks, FooterLink, FooterText } from './Footer.styles';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinks>
      <FooterText>© {new Date().getFullYear()} DeadCCGRevival. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;