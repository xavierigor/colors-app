import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: 20%;
  height: 25%;
  background-color: ${props => props.background};
  margin-bottom: -6px;
  color: ${props => (props.brightness <= 0.3 ? "#fff" : "#000")} !important;
  position: relative;

  .color-name {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
    text-transform: uppercase;
  }
`;
