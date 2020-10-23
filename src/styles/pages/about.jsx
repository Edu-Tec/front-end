import styled, { keyframes } from 'styled-components';

import backgroundAbout from '../../assets/images/about-background.jpg';

const togetherAnimationMembers = keyframes`
  to {
    transform: translateX(0);
  }
`;

const vitoAnimation = keyframes`
  to {
    transform: translate(0,0);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundAbout});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  #about-us-embed-isa {
    width: 100vw;
    height: fit-content;
    color: white;
    font-size: 1.5rem;
    position: relative;
    display: flex;
    justify-content: center;

    h2 {
      transform: translateX(-55vw);
      animation: ${togetherAnimationMembers} 0.75s ease forwards;
    }

    img {
      transform: translateX(50vw);
      width: 10vw;
      position: absolute;
      top: -430%;
      left: 50%;
      transition: 0.2s ease;
      animation: ${togetherAnimationMembers} 1s 1s ease forwards;
    }

    &:hover {
      img {
        opacity: 0.35;
      }
    }
  }

  #about-us-embed-vito {
    width: fit-content;
    height: fit-content;
    color: white;
    font-size: 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 36px;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    padding: 10px;
    justify-content: center;
    width: 100vw;
    height: 50vh;
    gap: 5vw;

    img {
      width: 10vw;
      margin: -11.5% 0 -0.5% -8.5%;
      transition: 0.2s ease;
      z-index: 1;
      transform: translate(0, 32.5vh);
      animation: ${vitoAnimation} 2s 2.5s ease forwards;
    }

    h2 {
      margin: 0 -0.05% 1.25% 0;
      transform: translate(-55vw, 0);
      animation: ${vitoAnimation} 1s 2s ease forwards;
    }

    h3 {
      margin: -15% 0 1.65% -6.25%;
      font-size: 48px;
      z-index: 0;
      transform: translate(55vw, 0);
      animation: ${vitoAnimation} 1s 2s ease forwards;
    }

    &:hover {
      img {
        opacity: 0.35;
      }
    }
  }
`;
