import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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

    &:hover {
      stroke: gray;
    }
  }
`;
