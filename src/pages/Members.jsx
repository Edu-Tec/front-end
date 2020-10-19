import React from 'react';

import { Container } from '../styles/pages/members';
import NavBar from '../components/pages/NavBar';

function Members() {
  return (
    <Container> 
       <NavBar></NavBar>
    <main>
      <h1>Integrantes</h1>
      <p>Aqueles que deram seu tempo para que consiga ver seus astros</p>
    </main>
    <footer>
      
    </footer>
    </Container>
  );
}

export default Members;