import styled from 'styled-components';

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
  .starter {
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

export const Stars = styled.div`
  width: ${getRandom(window.innerWidth)};
  height: ${getRandom(window.innerHeight)};
`;
