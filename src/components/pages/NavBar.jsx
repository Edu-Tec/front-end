import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BiMenu } from 'react-icons/all';

import { Container } from '../styles/navBar';

import logo from '../../assets/images/Luvilla - Logo.svg';

function NavBar({ style, dark, fixed }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <Container dark={dark} fixed={fixed} style={style}>
      <nav>
        <h2>Luvilla</h2>
        <div>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/members">
            Integrantes
          </Link>
          <Link className="link" to="/about">
            Sobre
          </Link>
        </div>
        <div className="menu" onClick={toggleMenu}>
          <BiMenu size={48} fill="white" stroke="white" />
        </div>
        <div className="blackItAll" />
        <img src={logo} alt="Logo" />
      </nav>
    </Container>
  );
}

export default NavBar;
