import styled from 'styled-components';

// import backgroundAbout from '../../assets/images/about-background.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  #start {
    color: white;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.5vh;
    cursor: pointer;
    margin-top: -50px;
    font-weight: 700;
    text-decoration: none;
    transform: scale(0);
    transition: 0.65s ease-out;
    text-shadow: 0 0 25px black;

    svg,
    b {
      transition: 0.2s ease;
    }

    &:hover {
      opacity: 0.75;
      text-shadow: 0 0 25px white;
      b {
        transform: translate(0, -5px);
      }
      svg {
        transform: translate(0, 5px) scale(1.25);
      }
    }

    @media screen and (max-width: 768px) {
      & {
        font-size: 2.4rem;
      }
    }
  }
`;

export const InfoDiv = styled.div`
  width: 80vw;
  height: fit-content;
  font-weight: bold;
  padding: 50px;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  transition: 1s ease;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.75);
  color: white;

  .title {
    position: absolute;
    top: 50px;
  }

  .infos {
    width: 91%;
    height: 50vh;
    padding-right: 50px;
    text-align: justify;
    transition: 1.5s ease;
    margin-top: 50px;
    overflow: auto !important;
  }

  svg {
    transition: 100ms ease;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.45);
    color: black;

    svg:hover {
      transition: 100ms ease;
      opacity: 1;
      fill: white;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 87.5%;
    padding: 25px;
    height: 75vh;

    .infos {
      width: 100%;
      margin-top: 125px;
      margin-left: 35px;
    }

    .title {
      top: 21.5vh;
      width: 70%;
    }

    svg {
      margin-top: 15px;
    }
  }
`;
