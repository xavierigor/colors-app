import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  .slider {
    width: 340px;
    margin: 0 10px;
    display: inline-block;
  }

  .rc-slider-track {
    background-color: transparent;
  }

  .rc-slider-rail {
    height: 8px;
  }

  .rc-slider-handle,
  .rc-slider-handle:active,
  .rc-slider-handle:focus,
  .rc-slider-handle:hover {
    width: 13px;
    height: 13px;
    background: green;
    outline: none;
    border: 2px solid green;
    box-shadow: none;
    margin-left: -7px;
    margin-top: -3px;
  }

  .Palette-colors {
    height: 90%;
  }
`;
