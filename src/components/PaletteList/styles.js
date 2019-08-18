import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  background: #115fa9;
`;

export const MiddleContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 1060px) {
    width: 80%;
  }

  @media (max-width: 760px) {
    width: 90%;
  }

  nav {
    height: 80px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .palettes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;

    @media (max-width: 560px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
