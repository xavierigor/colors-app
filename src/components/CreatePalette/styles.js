import styled from "styled-components";

export const Container = styled.div`
  .appbar-link {
    color: #000;
    font-weight: 500;
    text-decoration: none;
    transition: font-size 0.5s;
    display: flex;
    align-items: center;
    text-transform: capitalize;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  .drawer-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
    width: 100%;

    .drawer-title {
      font-size: 1.6rem;
      font-weight: 500;
    }

    .small-buttons {
      margin: 20px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .picker,
    .text-field {
      width: 100% !important;
    }

    .text-field {
      margin: 15px 0 20px 0;
    }

    .big-button {
      height: 80px;
      font-size: 1.3rem;
      font-weight: 500 !important;
    }
  }
`;
