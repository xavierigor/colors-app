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
`;
