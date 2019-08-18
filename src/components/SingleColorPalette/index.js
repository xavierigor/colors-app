import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  function changeFormat(value) {
    setFormat(value);
  }

  const colorBoxes = _shades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showLink={false}
      isTall
    />
  ));

  return (
    <Container>
      <Navbar showLevel={false} changeFormat={changeFormat} />
      <div className="Palette-colors">
        {colorBoxes}
        <Link to={`/palette/${palette.id}`} className="go-back-box">
          <div className="go-back-text">Go Back</div>
        </Link>
      </div>
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </Container>
  );
}
