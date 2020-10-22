import styled from 'styled-components';

import background from '../../assets/images/astro-background.png';



export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  #goBack {
    position: absolute;
    left: 25px;
    bottom: 25px;
    stroke: white;
    color: white;
    transition: 0.2s ease;

    /* #animationOver {
      width: 42px;
      height: 42px;
      background: red;
      position: absolute;
      bottom: 0;
      left: 0;
    } */
  }
`;
