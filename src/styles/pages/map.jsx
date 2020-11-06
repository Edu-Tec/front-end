import styled from 'styled-components';

import backgroundImage from '../../assets/images/home-background.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  #search {
    z-index: 999;
    position: absolute;
    top: 50px;
    right: 10px;
    margin-top: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;

    input {
      color: white;
      background: rgba(255, 255, 255, 0.125);
      border-radius: 10px;
      width: 0;
      height: 45px;
      transition: 0.2s ease;
      font-size: 1.2rem;
      outline: none;

      &:focus {
        background: rgba(255, 255, 255, 0.25);
      }
    }
  }

  .leaflet-bar {
    background-color: transparent;
    top: 7.5vh;
    a {
      color: white;
    }
  }

  .leaflet-container {
    background: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;

    a {
      background: transparent;
      color: white;
    }
  }

  .leaflet-control-attribution {
    background: transparent;
  }
  .map-popup {
    margin-bottom: -15px;

    .leaflet-popup-content {
      text-shadow: 0 0 20px black;
      color: black;
      font-size: 20px;
      padding: 7.5px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 45px;
        margin-right: 15px;
      }
    }

    .leaflet-popup-content-wrapper {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 15px;
      box-shadow: none;
    }

    a {
      box-shadow: 17.2868px 27.6589px 41.4884px rgba(255, 255, 255, 0.16);
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.15s ease;

      &:hover {
        color: #4d4d4d !important;
      }
    }
  }

  #kapa {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 25px;
    background: black;
    z-index: 99999;
  }

  /* .map-popup .leaflet-popup-tip-container {
    display: none;
  } */
`;
