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
  nav {
    width: 100%;
    height: 50px;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #00000030;
    div {
      width: 20%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .link {
        text-decoration: none;
        color: white;
      }
    }
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
`;
