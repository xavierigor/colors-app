import React, { useState } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { Container } from "./styles";

import ColorBox from "../ColorBox";

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox key={color.id} background={color.hex} name={color.name} />
  ));

  return (
    <Container>
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={setLevel}
        />
      </div>
      <div className="Palette-colors">{colorBoxes}</div>
    </Container>
  );
}
