import { useState } from 'react';
import Link from 'next/link';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import { APP_NAME } from '../../config';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color='light' light expand='md'>
        <Link href='/'>
          <NavLink style={{ cursor: 'pointer' }} className='font-weight-bold'>
            {APP_NAME}
          </NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <>
              <NavItem>
                <Link href='/login'>
                  <NavLink style={{ cursor: 'pointer' }}>Login</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href='/register'>
                  <NavLink style={{ cursor: 'pointer' }}>Register</NavLink>
                </Link>
              </NavItem>
            </>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
