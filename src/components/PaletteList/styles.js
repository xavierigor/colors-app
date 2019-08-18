import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: blue;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const MiddleContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;

  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #fff;
    padding: 15px 0;
  }

  .palettes {
    width: 100%;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 5%;
  }
`;
