import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  background: #3c40c6;
  /* background: #115fa9; */
`;

export const MiddleContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 0 0 30px 0;

  @media (max-width: 1060px) {
    width: 80%;
  }

  @media (max-width: 760px) {
    width: 90%;
  }

  nav {
    height: 90px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: #fff;
    }

    .create-new-palette {
      font-weight: 500;
      text-decoration: underline !important;
    }
  }

  .palettes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;

    @media (max-width: 620px) {
      grid-row-gap: 30px;
      grid-column-gap: 15px;
    }

    @media (max-width: 560px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
