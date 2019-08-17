import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background: ${props => props.background};
`;
