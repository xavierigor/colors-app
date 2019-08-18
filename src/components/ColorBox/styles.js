import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: ${props => (props.isTall ? "50%" : "25%")};
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background: ${props => props.background};
  text-transform: uppercase;
  margin-bottom: -4px;

  &:hover .copy-button {
    opacity: 1;
    transition: opacity 0.5s;
  }

  .copy-button {
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
    color: ${props => (props.brightness <= 0.3 ? "#fff" : "#000")} !important;
    text-transform: uppercase;
    line-height: 30px;
    border: none;
    cursor: pointer;
    opacity: 0;
  }

  .box-content {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 10px;
    color: ${props => (props.brightness <= 0.3 ? "#fff" : "#000")} !important;
    letter-spacing: 1px;
    font-size: 12px;
  }

  .see-more {
    width: 60px;
    height: 30px;
    position: absolute;
    right: 0;
    bottom: 0;
    line-height: 30px;
    text-align: center;
    border: none;
    color: ${props => (props.brightness <= 0.3 ? "#fff" : "#000")} !important;
    background: rgba(255, 255, 255, 0.3);
  }

  .copy-overlay {
    width: 100%;
    height: 100%;
    background: ${props => props.background};
    opacity: 0;
    z-index: 0;
    transform: scale(0.1);
    transition: transform 0.3s ease-in-out;
  }

  .copy-overlay.show {
    position: absolute;
    opacity: 1;
    z-index: 2;
    transform: scale(9);
  }

  .copy-msg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: scale(0.1);
    opacity: 0;
    z-index: 0;
    color: #fff;
    text-align: center;
  }

  .copy-msg.show {
    opacity: 1;
    z-index: 3;
    transform: scale(1);
    transition: all 0.4s ease-in-out;
    transition-delay: 0.2s;
  }

  .copy-msg h1 {
    font-weight: 400;
    font-size: 4.5rem;
    text-shadow: 1px 2px #000;
    background: rgba(255, 255, 255, 0.3);
    width: 100%;
    padding: 1rem;
    margin-bottom: 20px;
  }

  .copy-msg p {
    font-size: 2rem;
    font-weight: 100;
    text-transform: lowercase;
    color: ${props => (props.brightness <= 0.3 ? "#fff" : "#000")} !important;
  }
`;
