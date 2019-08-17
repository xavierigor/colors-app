import React, { useState } from "react";

import { Container } from "./styles";

import Navbar from "../Navbar";
import ColorBox from "../ColorBox";

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox key={color.id} background={color[format]} name={color.name} />
  ));

  return (
    <Container>
      <Navbar level={level} setLevel={setLevel} changeFormat={setFormat} />
      <div className="Palette-colors">{colorBoxes}</div>
    </Container>
  );
}
