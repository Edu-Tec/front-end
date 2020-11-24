import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  BiMenu,
  BiHome,
  BsFillPeopleFill,
  BsFillInfoCircleFill,
} from 'react-icons/all';

import { Container } from '../styles/navBar';

import logo from '../../assets/images/Luvilla - Logo.svg';

function NavBar({ style, dark, fixed }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
    console.log(isMenuOpened);
  };

  return (
    <>
      <Container dark={dark} fixed={fixed} style={style}>
        <nav>
          <h2>Luvilla</h2>
          <div className="normalMenu">
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
          <img src={logo} alt="Logo" />
          <div
            className={!isMenuOpened ? 'black notBlackAll' : 'black blackAll'}
            onClick={toggleMenu}
          >
            <Link className="link" to="/">
              <BiHome size={32} /> Home
            </Link>
            <Link className="link" to="/members">
              <BsFillPeopleFill size={32} /> Integrantes
            </Link>
            <Link className="link" to="/about">
              <BsFillInfoCircleFill size={32} /> Sobre
            </Link>
          </div>
        </nav>
      </Container>
    </>
  );
}

export default NavBar;
