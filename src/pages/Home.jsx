import React from 'react';
import { VscDebugStart } from 'react-icons/all';

import { Container } from '../styles/pages/home';
import NavBar from '../components/pages/NavBar';
import ParallaxBackground from '../components/pages/ParallaxBackground';

function Home() {
  return (
    <Container>
      <NavBar dark fixed />
      <ParallaxBackground amount={100} button>
        Iniciar <VscDebugStart />
      </ParallaxBackground>
    </Container>
  );
}

export default Home;
