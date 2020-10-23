import React from 'react';

import NavBar from '../components/pages/NavBar';

import isaImage from '../assets/members/about/isa.png';
import vitoImage from '../assets/members/about/vito.png';

import { Container } from '../styles/pages/about';

const About = () => {
  return (
    <Container>
      <NavBar fixed />
      <div id="about-us-embed-isa">
        <h2>Objetivos</h2>
        <img src={isaImage} alt="Isa" />
      </div>
      <div id="about-us-embed-vito">
        <h2>Inspirações</h2>
        <img src={vitoImage} alt="Vito" />
        <h3>Desafios</h3>
      </div>
    </Container>
  );
};

export default About;
