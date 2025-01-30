import { Navbar, NavItem } from '@phoenix-vc/design-system';
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar>
      <NavItem>
        <Link href="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link href="/portfolio">Portfolio</Link>
      </NavItem>
      <NavItem>
        <Link href="/process">Process</Link>
      </NavItem>
      <NavItem>
        <Link href="/contact">Contact</Link>
      </NavItem>
    </Navbar>
  );
}
