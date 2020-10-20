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
  p,
  span {
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
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 48px;
    }
    p {
      font-size: 16px;
      padding: 0 3px;
    }
    .span {
      width: 450px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      color: white;
    }
  }
`;

export const MembersDiv = styled.div`
  width: 25%;
  height: 67%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: 300ms ease-in-out;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;

    &:hover {
    }
  }
`;
