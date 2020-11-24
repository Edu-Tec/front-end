import styled, { keyframes } from 'styled-components';

const colors = {
  igo: '#0000ff',
  isa: '#ffffff',
  laura: '#800080',
  vitor: '#ff0000',
};

const appearList = keyframes`
  from{
    transform: translateX(-150%);
  }
  to{
    transform: translateX(0%);
  }
`;
const appearName = keyframes`
  from{
    transform: translateX(-500%);
  }
  to{
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  /* overflow: hidden; */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  will-change: translateX;
  .members {
    width: 100%;
    height: calc(100% - 51px);
    display: flex;
    margin-top: 50px;
    flex-direction: row;
    align-items: center;
    .igor,
    .isa,
    .laura,
    .vitor {
      width: 25%;
      height: 100vh;
      margin-top: 50px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 500ms ease-out;
      .text {
        width: 100%;
        height: 100%;
        margin-top: 20px;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 1fr);
        p {
          transform: translateX(-500%);
          font-size: 22px;
        }
      }
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
      }
      &:hover {
        .text {
          p:nth-of-type(1) {
            animation: ${appearList} ease-out 500ms;
            animation-fill-mode: both;
          }
          p:nth-of-type(2) {
            animation: ${appearList} ease-out 900ms;
            animation-fill-mode: both;
          }
          p:nth-of-type(3) {
            animation: ${appearList} ease-out 1300ms;
            animation-fill-mode: both;
          }
          p:nth-of-type(4) {
            animation: ${appearList} ease-out 1700ms;
            animation-fill-mode: both;
          }
          p:nth-of-type(5) {
            animation: ${appearList} ease-out 2100ms;
            animation-fill-mode: both;
          }
          p:nth-of-type(6) {
            animation: ${appearName} ease-out 2500ms;
            animation-fill-mode: both;
          }
        }
      }
    }
    .igor {
      transition: ease-out 500ms;
      &:hover {
        background-color: ${colors.igo}30;
      }
      p:nth-of-type(6) {
        color: ${colors.igo};
        font-size: 26px;
        justify-self: center;
      }
    }
    .isa {
      transition: ease-out 500ms;
      &:hover {
        background-color: ${colors.isa}30;
      }
      p:nth-of-type(6) {
        color: ${colors.isa};
        font-size: 26px;
        justify-self: center;
      }
    }
    .laura {
      transition: ease-out 500ms;
      &:hover {
        background-color: ${colors.laura}30;
      }
      p:nth-of-type(6) {
        color: ${colors.laura};
        font-size: 26px;
        justify-self: center;
      }
    }
    .vitor {
      transition: ease-out 500ms;
      &:hover {
        background-color: ${colors.vitor}30;
      }
      p:nth-of-type(6) {
        color: ${colors.vitor};
        font-size: 26px;
        justify-self: center;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;

      .igor,
      .isa,
      .laura,
      .vitor {
        overflow: hidden;
        flex-direction: row;
        width: 100vw;
        height: fit-content;
      }

      .text {
        overflow: auto !important;
        margin-top: 0;
      }

      img {
        margin-right: 7.5vw;
      }
    }
  }
`;
