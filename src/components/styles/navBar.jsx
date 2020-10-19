import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  nav {
    width: 100%;
    height: 50px;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s ease;
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

  nav:hover {
    background-color: #00000097;
  }
`;
