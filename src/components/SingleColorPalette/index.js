import React from "react";

import ColorBox from "../ColorBox";

import { Container } from "./styles";

export default function SingleColorPalette({ palette, colorToFilterBy }) {
  const _shades = getShades();

  function getShades() {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  const colorBoxes = _shades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));

  return (
    <Container>
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </Container>
  );
}
