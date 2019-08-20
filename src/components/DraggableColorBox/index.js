import React from "react";

import chroma from "chroma-js";

import { Container } from "./styles";

export default function DraggableColorBox({ name, background }) {
  return (
    <Container
      background={background}
      brightness={chroma(background).luminance()}
    >
      <span className="color-name">{name || background}</span>
    </Container>
  );
}
