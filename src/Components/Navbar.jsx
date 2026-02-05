import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const location = useLocation();
  const navItems = ['Home', 'About', 'Project', 'Contact'];

  // Update active state based on hash or path
  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash.replace('#', '');
      if (hash) {
        const item = navItems.find(i => i.toLowerCase() === hash);
        if (item) setActive(item);
      } else {
        setActive('Home');
      }
    } else if (location.pathname.startsWith('/project/')) {
      setActive('Project');
    }
  }, [location]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        width: '660px',
        height: '75px',
        left: 'calc(50% - 330px)',
        top: '40px',
        background: 'rgba(0, 0, 0, 0.25)',
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset',
        backdropFilter: 'blur(15.1px)',
        borderRadius: '101px',
        display: 'flex',
        alignItems: 'center',
        zIndex: 100,
        boxSizing: 'border-box'
      }}>

        <div style={{
          position: 'absolute',
          width: '49px',
          height: '49px',
          left: '59px',
          top: '13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Link to="/">
            <svg width="49" height="49" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 16L22 12V22L14 26V16Z" fill="#C02EFF" />
              <path d="M14 29L22 25V31L14 35V29Z" fill="#C02EFF" />
              <path d="M26 16L34 12V40L26 44V16Z" fill="#C02EFF" />
            </svg>
          </Link>
        </div>

        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '40px',
          margin: 0,
          padding: 0,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          alignItems: 'center'
        }}>
          {navItems.map((item) => {
            const isHomePage = location.pathname === '/';
            const sectionId = item === 'Project' ? 'project' : item.toLowerCase();
            const targetHash = item === 'Home' ? '#' : `#${sectionId}`;

            return (
              <li key={item} style={{ position: 'relative' }}>
                {isHomePage ? (
                  <a
                    href={targetHash}
                    onClick={() => setActive(item)}
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '31.2px',
                      letterSpacing: '0px',
                      color: 'rgba(255, 255, 255, 1)',
                      textDecoration: 'none',
                      transition: 'opacity 0.3s',
                      position: 'relative',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      opacity: 1
                    }}
                  >
                    {item}
                    {active === item && (
                      <div style={{
                        position: 'absolute',
                        bottom: '-6px',
                        left: '0',
                        width: '100%',
                        height: '2px',
                        background: '#C02EFF',
                        borderRadius: '10px'
                      }} />
                    )}
                  </a>
                ) : (
                  <Link
                    to={item === 'Home' ? '/' : `/#${sectionId}`}
                    onClick={() => setActive(item)}
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '31.2px',
                      letterSpacing: '0px',
                      color: 'rgba(255, 255, 255, 1)',
                      textDecoration: 'none',
                      transition: 'opacity 0.3s',
                      position: 'relative',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      opacity: 1
                    }}
                  >
                    {item}
                    {active === item && (
                      <div style={{
                        position: 'absolute',
                        bottom: '-6px',
                        left: '0',
                        width: '100%',
                        height: '2px',
                        background: '#C02EFF',
                        borderRadius: '10px'
                      }} />
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
