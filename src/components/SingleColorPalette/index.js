import React, { useState } from "react";

import Navbar from "../Navbar";
import ColorBox from "../ColorBox";
import Footer from "../PaletteFooter";

import { Container } from "./styles";

export default function SingleColorPalette({ palette, colorToFilterBy }) {
  const [format, setFormat] = useState("hex");

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

  async function changeFormat(value) {
    await setFormat(value);
  }

  const colorBoxes = _shades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showLink={false}
    />
  ));

  return (
    <Container>
      <Navbar showLevel={false} changeFormat={changeFormat} />
      <div className="Palette-colors">{colorBoxes}</div>
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </Container>
  );
}
