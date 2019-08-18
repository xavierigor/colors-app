import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 5vh;

  .logo {
    margin-right: 15px;
    padding: 0 13px;
    font-size: 20px;
    background: #eceff1;
    height: 100%;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #000;
    }
  }

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

  .select-container {
    margin: 0 1rem 0 auto;
  }
`;
