import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .Palette-colors {
    height: 90%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  background: #fff;
  height: 5vh;
  justify-content: flex-end;
  align-items: center;

  .emoji {
    font-size: 1.1rem;
    margin: 0 1rem 4px 0.8rem;
    display: flex;
    align-self: center;
    vertical-align: middle;
  }
`;
