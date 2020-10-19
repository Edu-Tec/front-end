import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import { Container } from '../styles/pages/members';
import NavBar from '../components/pages/NavBar';

import igoImage from '../assets/members/Igo.png';
import isaImage from '../assets/members/Isa.png';
import lauraImage from '../assets/members/Laura.jpeg';
import vidroImage from '../assets/members/Vidro.jpeg';

function Members() {
  const [text, setText] = useState('');

  useEffect(() => {
    $('.member')
      .find('img')
      .on('mouseenter', () => {
        if ($('.membersDiv').find('img')[0]) {
          switch ($('.membersDiv').find('img')[0].alt) {
            case 'igo':
              $('.membersDiv').find('p').addClass('helperAnimation');
              $('.membersDiv').addClass('helperAnimationDiv');

              setTimeout(() => {
                $('.membersDiv').find('p').addClass('helpAnimationPOpacity');
              }, 600);
              setTimeout(() => {
                $('.membersDiv').find('p').addClass('helperAnimation');
              }, 800);
              break;
            case 'isa':
              $('.membersDiv').find('p').addClass('helperAnimation');
              $('.membersDiv').addClass('helperAnimationDiv');

              setTimeout(() => {
                $('.membersDiv').find('p').addClass('helpAnimationPOpacity');
              }, 600);
              setTimeout(() => {
                $('.membersDiv').find('p').addClass('helperAnimation');
              }, 800);
              break;
            case 'laura':
              $('.membersDiv').find('p').addClass('helperAnimation');
              $('.membersDiv').addClass('helperAnimationDiv');

              setTimeout(() => {
                $('.membersDiv').find('p').addClass('helpAnimationPOpacity');
              }, 600);
              setTimeout(() => {
                $('.membersDiv').find('p').addClass('helperAnimation');
              }, 800);
              break;
            case 'vidro':
              $('.membersDiv').find('p').addClass('helperAnimation');
              $('.membersDiv').addClass('helperAnimationDiv');

              setTimeout(() => {
                $('.membersDiv').find('p').addClass('helpAnimationPOpacity');
              }, 600);
              setTimeout(() => {
                $('.membersDiv').find('p').addClass('helperAnimation');
              }, 800);
              break;
            default:
              break;
          }
        }
      });

    $('.membersDiv').on('mouseleave', () => {
      if ($('.membersDiv').find('img')[0]) {
        switch ($('.membersDiv').find('img')[0].alt) {
          case 'igo':
            $('.membersDiv').find('p').removeClass('helpAnimationPOpacity');
            setTimeout(() => {
              $('.membersDiv').find('p').removeClass('helperAnimation');
            }, 200);
            setTimeout(() => {
              $('.membersDiv').removeClass('helperAnimationDiv');
            }, 400);
            break;
          case 'isa':
            $('.membersDiv').find('p').removeClass('helpAnimationPOpacity');
            setTimeout(() => {
              $('.membersDiv').find('p').removeClass('helperAnimation');
            }, 200);
            setTimeout(() => {
              $('.membersDiv').removeClass('helperAnimationDiv');
            }, 400);
            break;
          case 'laura':
            $('.membersDiv').find('p').removeClass('helpAnimationPOpacity');
            setTimeout(() => {
              $('.membersDiv').find('p').removeClass('helperAnimation');
            }, 200);
            setTimeout(() => {
              $('.membersDiv').removeClass('helperAnimationDiv');
            }, 400);
            break;
          case 'vidro':
            $('.membersDiv').find('p').removeClass('helpAnimationPOpacity');
            setTimeout(() => {
              $('.membersDiv').find('p').removeClass('helperAnimation');
            }, 200);
            setTimeout(() => {
              $('.membersDiv').removeClass('helperAnimationDiv');
            }, 400);
            break;
          default:
            break;
        }
      }
    });
  }, []);

  return (
    <Container>
      <NavBar />
      <main>
        <h1>Integrantes</h1>
        <p>Aqueles que deram seu tempo para que consiga ver seus astros</p>
        <div className="membersDiv">
          <div
            onMouseEnter={() => {
              setText(
                'Desenvolvedor full stack , além de matemático e físico. Adora resolver enigmas. Desbravador há 2 anos. 16 anos de pura sedução.'
              );
            }}
            className="member"
          >
            <img src={igoImage} alt="igo" />
          </div>
          <div
            onMouseEnter={() => {
              setText(
                'Domina tanto humanas quanto exatas. Ama astronomia e filosofia. Seu passatempo preferido é ler e maratonar séries. Aspirante a escritora. 16 anos de puro existencialismo.'
              );
            }}
            className="member"
          >
            <img src={isaImage} alt="isa" />
          </div>
          <div
            onMouseEnter={() => {
              setText(
                'Trabalhou na Diretoria Regional de Educação por 1 ano. Desbravadora há 6 anos. Adora maquiagem, esportes e história. 16 anos de puro carinho.'
              );
            }}
            className="member"
          >
            <img src={lauraImage} alt="laura" />
          </div>
          <div
            onMouseEnter={() => {
              setText(
                'Desenvolvedor full stack , além de matemático e químico nas horas vagas. Desbravador há 3 anos. 16 anos de pura de sedução.'
              );
            }}
            className="member"
          >
            <img src={vidroImage} alt="vidro" />
          </div>
          <p>{text}</p>
        </div>
      </main>
      <footer />
    </Container>
  );
}

export default Members;
