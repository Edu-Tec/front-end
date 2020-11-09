import styled from 'styled-components';

export const Search = styled.div`
  z-index: 999;
  position: fixed;
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
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 999;

  .leaflet-bar {
    background-color: transparent;
    position: fixed;
    top: 7.5vh;
    a {
      color: white;
    }
  }

  #search {
    z-index: 999;
    position: fixed;
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

  .leaflet-container {
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;

    a {
      background: transparent;
      color: white;
    }
  }

  .leaflet-marker-icon {
    transition: 0.3s ease;
    border-radius: 50%;

    &:hover {
      box-shadow: 0 0 25px white;
      width: 23.5px !important;
      height: 23.5px !important;
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
`;
