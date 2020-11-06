import styled, { keyframes } from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';

const getRandom = (value) => {
  return Math.floor(Math.random() * value) + 1;
};

export const Container = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
  font-family: 'Poppins', sans-serif;
  background-color: black;
  color: white;
  overflow-x: hidden;
  overflow-y: hidden;
  .starter {
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      background-color: transparent;
      border: none;
      font-family: 'Poppins', sans-serif;
      color: white;
      font-size: 50px;
      cursor: pointer;
      &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
      }
    }
  }
`;

const shineAnimation = keyframes`
  0%, 100%{
    -webkit-box-shadow: 0px 0px 50px 6.25px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 0px 0px 50px 6.25px rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 50px 6.25px rgba(255, 255, 255, 0.75);
  }
  50%{
    -webkit-box-shadow: 0px 0px 100px 6.25px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 0px 0px 100px 6.25px rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 100px 6.25px rgba(255, 255, 255, 0.75);
  }
`;

export const Stars = styled.div`
  will-change: box-shadow;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  position: absolute;
  background-color: white;
  border-radius: 50%;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  /* filter: blur(0.45px); */
  overflow: hidden;
  animation: ${shineAnimation} ${(props) => props.shineTime} ease-in-out
    infinite;
`;
