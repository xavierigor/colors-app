import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: 25%;
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
    color: #fff;
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
    color: #000;
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
    color: #fff;
    background: rgba(255, 255, 255, 0.3);
  }
`;
