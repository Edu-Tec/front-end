import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: ${({ fixed }) => {
    if (fixed) {
      return 'fixed';
    }

    return 'initial';
  }};
  top: 0;
  left: 0;
  color: white;
  z-index: 999;
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
    background-color: ${(props) => {
      return props.dark ? 'rgba(255,255,255,.25)' : '#00000098';
    }};
  }
`;
