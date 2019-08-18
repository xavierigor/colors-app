import React from "react";

import { Container } from "./styles";

export default function MiniPalette({ palette, handleMiniPaletteClick }) {
  const miniColorBoxes = palette.colors.map(color => (
    <div
      key={color.name}
      className="mini-color"
      style={{ background: color.color }}
    />
  ));

  return (
    <Container onClick={handleMiniPaletteClick}>
      <div className="colors">{miniColorBoxes}</div>
      <h5 className="title">
        {palette.paletteName} <span className="emoji">{palette.emoji}</span>
      </h5>
    </Container>
  );
}
