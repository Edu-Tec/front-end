/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

import backgroundImage from '../../assets/images/home-background.jpg';

// const getRandom = (value) => {
//   return Math.floor(Math.random() * value) + 1;
// };

export const Container = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Poppins', sans-serif;
  background-color: black;
  /* background-image: url(${backgroundImage}); */
  color: white;
  overflow-x: hidden;
  overflow-y: hidden;
  span {
    font-size: 22px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .starter {
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .starsBox {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 18.75%;
      top: 30%;
      transform: translate(-18.75%, -30%);
    }
  }
`;

const shineAnimation = ({ sizeValue, leftValue, topValue, mult }) => keyframes`
  ${(() => {
    sizeValue = parseInt(sizeValue) + mult;
    leftValue = parseInt(leftValue) + mult / 2;
    topValue = parseInt(topValue) - mult / 2;
  })()}
  0%, 100%{
    -webkit-box-shadow: 0px 0px 50px 4.5px rgba(255, 255, 255, 0.6);
    -moz-box-shadow: 0px 0px 50px 4.5px rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 50px 4.5px rgba(255, 255, 255, 0.6);

  }
  50%{
    -webkit-box-shadow: 0px 0px 50px 4.5px rgba(255, 255, 255, 0.6);
    -moz-box-shadow: 0px 0px 50px 4.5px rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 50px 4.5px rgba(255, 255, 255, 0.6);
    /* width: ${sizeValue}px;
    height: ${sizeValue}px; */
    /* left: ${leftValue}px;
    top: ${topValue}px; */
    transform: scale(1.75);
`;

export const Stars = styled(animated.div)`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  position: absolute;
  background-color: white;
  border-radius: 50%;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  filter: blur(0.25px);
  overflow: hidden;
  animation: ${(props) =>
      shineAnimation({
        sizeValue: props.size,
        leftValue: props.left,
        topValue: props.top,
        mult: 5,
      })}
    ${(props) => props.shinetime} ease-in-out infinite;
  transform-origin: center center;
`;

export const Start = styled(animated.button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: none;
  font-family: 'Poppins', sans-serif;
  color: white;
  font-size: 50px;
  cursor: pointer;
  transition: 0.3s ease;
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  &:hover {
    transform: scale(1.25) !important;
    color: gray;

    svg {
      stroke: gray;
    }
  }
`;
