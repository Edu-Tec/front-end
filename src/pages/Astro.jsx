import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { FiArrowLeft } from 'react-icons/fi';

import NavBar from '../components/pages/NavBar';
import ParallaxBackground from '../components/pages/ParallaxBackground';

import { Container } from '../styles/pages/astro';

import whiteDwarf from '../assets/planets/ana_branca.PNG';
import blackHole from '../assets/planets/buraco_negro.png';
import blueStar from '../assets/planets/neutron_and_blue.png';
import planetaryNebula from '../assets/planets/planetary_nebula.png';
import redGiant from '../assets/planets/red_giant.png';
import normalStar from '../assets/planets/small_and_big_star.png';
import superRedGiant from '../assets/planets/super_red_giant.png';
import superNova from '../assets/planets/supernova.png';
import anaMarrom from '../assets/planets/ana_marrom.png';
import anaNegra from '../assets/planets/ana_negra.png';
import anaAmarela from '../assets/planets/ana_amarela.png';
import hiperGiganteAmarela from '../assets/planets/hipergigante_amarela.png';
import image404 from '../assets/planets/undefined.webp';

import api from '../services/api';

const Astro = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id } = props.match.params;
  const [star, setStar] = useState({});

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line no-shadow
      const data = (await api.get(`/?id=${id}`)).data[0];
      setStar(data);
    })();
  }, [id]);

  return (
    <Container>
      <NavBar fixed />
      <ParallaxBackground amount={35} outEffect>
        <AstroDiv id="furico">
          <img
            src={
              star.infos &&
              (() => {
                switch (star.infos.tipo) {
                  case 'Anã branca':
                    return whiteDwarf;
                  case 'Anã vermelha':
                    return redGiant;
                  case 'Anã marrom':
                    return anaMarrom;
                  case 'Anã negra':
                    return anaNegra;
                  case 'Anã amarela':
                    return anaAmarela;
                  case 'Hipergigante amarela':
                    return hiperGiganteAmarela;
                  case 'Buraco negro':
                    return blackHole;
                  case 'Estrela de nêutrons':
                    return blueStar;
                  case 'Estrela azul':
                    return blueStar;
                  case 'Gigante azul':
                    return blueStar;
                  case 'Supergigante azul':
                    return blueStar;
                  case 'Nebulosa planetária':
                    return planetaryNebula;
                  case 'Gigante vermelha':
                    return redGiant;
                  case 'Estrela amarela':
                    return normalStar;
                  case 'Gigante amarela':
                    return normalStar;
                  case 'Supergigante amarela':
                    return normalStar;
                  case 'Super gigante vermelha':
                    return superRedGiant;
                  case 'Supernova':
                    return superNova;
                  default:
                    return image404;
                }
              })()
            }
            alt={star.nome}
            draggable={false}
          />
          <div id="infos">
            {star.infos ? (
              <>
                <h1>{star.nome}</h1>
                <article>
                  <b>Tipo: </b>
                  {star.infos.tipo}
                </article>
                <article>
                  <b>Constelação: </b>
                  {star.infos.constelacao}
                </article>
                <article>
                  <b>Ascensão Reta: </b>
                  {star.infos.ascensao_reta}
                </article>
                <article>
                  <b>Declinação: </b>
                  {star.infos.declinacao}
                </article>
                <article>
                  <b>Magnitude Aparente: </b>
                  {star.infos.magnitude_aparente}
                </article>
                <article>
                  <b>Tipo Espectral: </b>
                  {star.infos.tipo_espectral}
                </article>
                <article>
                  <b>Variabilidade: </b>
                  {star.infos.variabilidade}
                </article>
                <article>
                  <b>Velocidade Radial: </b>
                  {star.infos.velocidade_radial}
                </article>
                <article>
                  <b>Paralaxe: </b>
                  {star.infos.paralaxe}
                </article>
                <article>
                  <b>Distância: </b>
                  {star.infos.distancia}
                </article>
                <article>
                  <b>Massa: </b>
                  {star.infos.massa}
                </article>
                <article>
                  <b>Raio: </b>
                  {star.infos.raio}
                </article>
                <article>
                  <b>Gravidade Superficial: </b>
                  {star.infos.gravidade_superficial}
                </article>
                <article>
                  <b>Luminosidade: </b>
                  {star.infos.luminosidade}
                </article>
                <article>
                  <b>Temperatura: </b>
                  {star.infos.temperatura}
                </article>
                <article>
                  <b>Idade: </b>
                  {star.infos.idade}
                </article>
                <p>
                  <b>Curiosidades: </b>
                  {star.infos.curiosidades
                    .replace('\r', '')
                    .replace('\n', '')
                    .replace('\t', '')}
                </p>
              </>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </AstroDiv>
      </ParallaxBackground>
      <Link to="/map" id="goBack">
        <FiArrowLeft size={42} />
        <span id="animationOver" />
      </Link>
    </Container>
  );
};

const getInAstroAnimation = keyframes`
  to {
    left: -12.5vw;
    transform: rotate(0deg);
  }
`;

const getInAstroAnimationMobile = keyframes`
  to {
    left: 50%;
    top: 0;
    transform: rotate(0deg) translate(-50%);
  }
`;

const getInInfosAnimation = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AstroDiv = styled.div`
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: flex-end;
  overflow: hidden auto;
  img {
    max-width: 55%;
    min-width: 55%;
    position: absolute;
    top: -5vh;
    left: -65vw;
    border-radius: 50%;
    background: transparent;
    border: 0;
    transition: 0.5s ease;
    /* -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; */
    transform: rotate(-180deg);
    animation: ${getInAstroAnimation} 1.5s 0.75s forwards;

    &:hover {
      box-shadow: 0 0 15px white;
    }
  }
  #infos {
    opacity: 0;
    background: blue;
    width: 50vw;
    height: fit-content;
    margin: 12.5vh 3vw 25px 0;
    background: rgba(0, 0, 0, 0.75);
    color: white;
    border-radius: 25px;
    padding: 50px;
    transform: translateX(65vw);
    animation: ${getInInfosAnimation} 1.5s 0.75s forwards;
    transition: 1s ease;

    h1 {
      font-size: 3rem;
    }

    article {
      font-size: 1.24rem;
      margin: 25px;
      transition: 1.25s ease;
    }

    p {
      font-size: 1.24rem;
      margin: 25px;
      transition: 1.25s ease;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.45);
      color: black;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    overflow: auto;

    img {
      animation: ${getInAstroAnimationMobile} 1.5s 0.75s forwards;
      position: relative;
      margin: 10vh 0 2.5vh 0;
    }

    #infos {
      overflow: auto;
      margin: 0;
      width: 100%;
      padding: 25px;
      margin-top: 2.5vh;
    }
  }
`;

export default Astro;
