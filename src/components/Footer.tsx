import { Footer as PhoenixFooter, FooterLink } from '@phoenix-vc/design-system';

export default function Footer() {
  return (
    <PhoenixFooter>
      <FooterLink href="https://twitter.com/phoenixvc">Twitter</FooterLink>
      <FooterLink href="https://linkedin.com/company/phoenixvc">LinkedIn</FooterLink>
      <FooterLink href="mailto:contact@phoenixvc.tech">Contact Us</FooterLink>
    </PhoenixFooter>
  );
}
