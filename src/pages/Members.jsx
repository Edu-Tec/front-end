import React from 'react';

import { Container } from '../styles/pages/members';
import ParallaxBackground from '../components/pages/ParallaxBackground';
import NavBar from '../components/pages/NavBar';
import Igor from '../assets/members/Igo.png';
import Isa from '../assets/members/Isa.jpeg';
import Laura from '../assets/members/Laura.jpeg';
import Vitor from '../assets/members/Vidro.jpeg';

function Members() {
  return (
    <Container>
      <NavBar dark fixed />
      <ParallaxBackground amount={100} />
      <section className="members">
        <div className="igor">
          <img src={Igor} alt="memberImage" title="Member Image" />
          <div className="text">
            <p>Desenvolvedor full stack.</p>
            <p>Matemático e físico.</p>
            <p>Adora resolver enigmas.</p>
            <p>Desbravador há 2 anos.</p>
            <p>16 anos de pura indiferença.</p>
            <p>IGOR</p>
          </div>
        </div>
        <div className="isa">
          <img src={Isa} alt="memberImage" title="Member Image" />
          <div className="text">
            <p>Domina tanto humanas quanto exatas.</p>
            <p>Ama astronomia e filosofia.</p>
            <p>Seu passatempo preferido é ler e maratonar séries.</p>
            <p>Aspirante a escritora.</p>
            <p>16 anos de puro existencialismo.</p>
            <p>ISABELLA</p>
          </div>
        </div>
        <div className="laura">
          <img src={Laura} alt="memberImage" title="Member Image" />
          <div className="text">
            <p>Trabalhou na Diretoria Regional de Educação</p>
            <p>Paixão por história.</p>
            <p>Adora maquiagem, esportes</p>
            <p>Desbravadora há 6 anos.</p>
            <p>16 anos de puro carinho.</p>
            <p>LAURA</p>
          </div>
        </div>
        <div className="vitor">
          <img src={Vitor} alt="memberImage" title="Member Image" />
          <div className="text">
            <p>Desenvolvedor full stack.</p>
            <p>Matemático e químico.</p>
            <p>Usa lógica como entretenimento</p>
            <p>Desbravador há 3 anos.</p>
            <p>16 anos de pura notoriedade.</p>
            <p>VITOR</p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Members;
