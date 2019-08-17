import React from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { Container } from "./styles";

export default function Navbar({ level, setLevel }) {
  return (
    <Container>
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={setLevel}
          />
        </div>
      </div>
    </Container>
  );
}
