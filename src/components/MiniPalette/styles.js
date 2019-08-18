import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .colors {
    width: 100%;
    height: 150px;
    background: #dae1e4;
    border-radius: 5px;
    overflow: hidden;
  }

  .mini-color {
    width: 20%;
    height: 25%;
    display: inline-block;
    margin: 0 auto -4px auto;
    position: relative;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    color: #000;
    padding-top: 0.5rem;
    font-size: 1rem;
    position: relative;
  }

  .emoji {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
`;
