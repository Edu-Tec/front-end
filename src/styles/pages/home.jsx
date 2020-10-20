import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('https://wallpapershome.com/images/pages/pic_h/18295.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h1,
  h2,
  p {
    font-weight: 300;
    margin: 0;
    padding: 0;
    outline: 0;
    color: white;
  }
  main {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 48px;
    }
    p {
      font-size: 16px;
      padding: 0 3px;
    }
  }
  #start {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 45px;
    cursor: pointer;
    gap: 25px;
    transition: 0.5s ease;
    text-decoration: none;
    font-size: 1rem;
  }
  #start svg {
    transition: 0.5s ease;
  }
  #start h5 {
    font-weight: normal;
  }
  #start:hover {
    color: gray;

    svg {
      stroke: gray;
    }
  }
`;
