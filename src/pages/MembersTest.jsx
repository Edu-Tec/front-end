import React, { useState } from 'react';

import { Container, MembersDiv } from '../styles/pages/membersTest';
import NavBar from '../components/pages/NavBar';

import igoImage from '../assets/members/Igo.png';
import isaImage from '../assets/members/Isa.jpeg';
import lauraImage from '../assets/members/Laura.jpeg';
import vidroImage from '../assets/members/Vidro.jpeg';

function MembersTest() {
  const [text, setText] = useState('');
  const [hovering, setHovering] = useState(false);

  const changeValues = (textState) => {
    setText(textState);
    setHovering(true);
  };

  const animationTimeOut = () => {
    setTimeout(() => {
      setHovering(false);
    }, 1000);
  };

  if (!hovering) {
    animationTimeOut();
  }

  return (
    <Container>
      <NavBar />
      <main>
        <h1>Integrantes</h1>
        <p>Aqueles que deram seu tempo para que consiga ver seus astros</p>
        <MembersDiv hovering={hovering}>
          <div
            onMouseEnter={() => {
              changeValues(
                'Desenvolvedor full stack , além de matemático e físico. Adora resolver enigmas. Desbravador há 2 anos. 16 anos de pura sedução.'
              );
            }}
            className="member"
          >
            <img src={igoImage} alt="igo" />
          </div>
          <div
            onMouseEnter={() => {
              changeValues(
                'Domina tanto humanas quanto exatas. Ama astronomia e filosofia. Seu passatempo preferido é ler e maratonar séries. Aspirante a escritora. 16 anos de puro existencialismo.'
              );
            }}
            className="member"
          >
            <img src={isaImage} alt="isa" />
          </div>
        </MembersDiv>
        <div className="span">{text}</div>
        <MembersDiv hovering={hovering}>
          <div
            onMouseEnter={() => {
              changeValues(
                'Trabalhou na Diretoria Regional de Educação por 1 ano. Desbravadora há 6 anos. Adora maquiagem, esportes e história. 16 anos de puro carinho.'
              );
            }}
            className="member"
          >
            <img src={lauraImage} alt="laura" />
          </div>
          <div
            onMouseEnter={() => {
              changeValues(
                'Desenvolvedor full stack , além de matemático e químico nas horas vagas. Desbravador há 3 anos. 16 anos de pura de sedução.'
              );
            }}
            className="member"
          >
            <img src={vidroImage} alt="vidro" />
          </div>
        </MembersDiv>
      </main>
      <footer />
    </Container>
  );
}

export default MembersTest;
