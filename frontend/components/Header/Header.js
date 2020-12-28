import { useState } from 'react';
import Link from 'next/link';
import NProgress from 'nprogress';

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
import { isAuth, signout } from '../../actions/auth';
import Router from 'next/router';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
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
              {!isAuth() && (
                <NavItem>
                  <Link href='/login'>
                    <NavLink style={{ cursor: 'pointer' }}>Login</NavLink>
                  </Link>
                </NavItem>
              )}
              {!isAuth() && (
                <NavItem>
                  <Link href='/register'>
                    <NavLink style={{ cursor: 'pointer' }}>Register</NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <Link href='/user'>
                    <NavLink style={{ cursor: 'pointer' }}>{`${
                      isAuth().name
                    }'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <Link href='/admin'>
                    <NavLink style={{ cursor: 'pointer' }}>{`${
                      isAuth().name
                    }'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && (
                <NavItem>
                  <Link href='/login'>
                    <NavLink
                      onClick={() => {
                        signout(() => {
                          Router.push('/login');
                        });
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      Logout
                    </NavLink>
                  </Link>
                </NavItem>
              )}
            </>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
