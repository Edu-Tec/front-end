import styled from 'styled-components';

// export const BlackAll = styled.div`

// `;

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
    img {
      width: 48px;
      margin-right: 10px;
    }
    .normalMenu {
      width: 20%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 3vw;
      .link {
        text-decoration: none;
        color: white;
      }
    }

    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }

    @media screen and (min-width: 768px) {
      & .normalMenu {
        margin-right: 0.9%;
      }

      .menu {
        display: none;
      }
    }

    @media screen and (max-width: 768px) {
      & .normalMenu {
        display: none;
      }
    }
  }

  nav:hover {
    background-color: ${(props) => {
      return props.dark ? 'rgba(255,255,255,.25)' : '#00000098';
    }};
  }
  @media screen and (max-width: 940px) {
    nav {
      .normalMenu {
        width: 40%;
      }
    }
  }
  @media screen and (max-width: 520px) {
    nav {
      .normalMenu {
        width: 60%;
      }
    }
  }

  .black {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.5s ease;

    a {
      margin: 25px;
      font-size: 2.35rem;
      color: white;
      font-weight: 700;
      text-decoration: none;
      text-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
      transition: 0.1s ease;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin: 17.5px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .notBlackAll {
    transform: translateY(-100vh);
  }

  .blackAll {
    transform: translateY(0vh);
  }
`;
