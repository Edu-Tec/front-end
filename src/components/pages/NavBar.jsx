import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../styles/navBar';

function NavBar() {
  return (
    <Container>
      <nav>
        <h2>Luvilla</h2>
        <div>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/members">
            Integrantes
          </Link>
          <Link className="link">Sobre</Link>
        </div>
        <h2>LVIL</h2>
      </nav>
    </Container>
  );
}

export default NavBar;
