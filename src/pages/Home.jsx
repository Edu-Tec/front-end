import React from 'react';
// import { Link } from 'react-router-dom';

import { Container } from '../styles/pages/home';
import NavBar from '../components/pages/NavBar';

function Home() {
  return (
    <Container>
      <NavBar />
      <main>
        <h1>Edutec - Cosmologia</h1>
        <p>See your own stars</p>
      </main>
      <footer />
    </Container>
  );
}

export default Home;
