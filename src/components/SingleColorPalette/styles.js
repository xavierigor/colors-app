import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .Palette-colors {
    height: 90%;
  }
  .go-back-box {
    background: #000;
    color: #fff;
    width: 20%;
    height: 50%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: -4px;
    text-decoration: none;
  }

  .go-back-text {
    width: 100px;
    height: 30px;
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -15px;
    text-align: center;
    background: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;
    line-height: 30px;
    border: none;
  }
`;
