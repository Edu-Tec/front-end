import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
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

  .membersDiv {
    width: 25vw; //60vw
    height: 25vw; //30vw
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    margin: 50px auto 75px auto;
    transition: 0.5s ease;
    p {
      text-align: center;
      font-weight: bold;
      text-shadow: 0 0 25px rgba(255, 255, 255, 0.65);
      transform: scale(0);
      transition: 0.5s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
    }
  }
  .member {
    align-self: center;
    justify-self: center;
  }
  .helperAnimation {
    transform: scale(1) !important;
    grid-column: 2 / 2;
    grid-row: 2 / 2;
  }
  .helpAnimationPOpacity {
    opacity: 1 !important;
  }
  .helperAnimationDiv {
    width: 60vw;
    height: 30vw;
  }
  .member {
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
    }
    &:nth-child(1) {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
    }
    &:nth-child(2) {
      grid-column: 1 / 1;
      grid-row: 3 / 3;
    }
    &:nth-child(3) {
      grid-column: 3 / 3;
      grid-row: 3 / 3;
    }
    &:nth-child(4) {
      grid-column: 3 / 3;
      grid-row: 1 / 1;
    }
  }
`;
