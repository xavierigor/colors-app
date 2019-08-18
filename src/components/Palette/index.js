import React, { useState } from "react";

import { Container } from "./styles";

import Navbar from "../Navbar";
import ColorBox from "../ColorBox";
import Footer from "../PaletteFooter";

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox
      key={color.id}
      background={color[format]}
      name={color.name}
      colorId={color.id}
      paletteId={palette.id}
      showLink
    />
  ));

  function changeFormat(value) {
    setFormat(value);
  }

  return (
    <Container>
      <Navbar
        level={level}
        setLevel={setLevel}
        changeFormat={changeFormat}
        showLevel
      />
      <div className="Palette-colors">{colorBoxes}</div>

      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </Container>
  );
}
