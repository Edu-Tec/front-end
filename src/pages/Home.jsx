import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from '../styles/pages/home';
import NavBar from '../components/pages/NavBar';

function Home() {
  return (
    <Container>
      <NavBar />
      <main>
        <h1>Edutec - Cosmologia</h1>
        <p>See your own stars</p>
        <Link id="start" to="/map">
          <h3>Start</h3>
          <FiArrowRight stroke="white" size={36} />
        </Link>
      </main>
      <footer />
    </Container>
  );
}

export default Home;
