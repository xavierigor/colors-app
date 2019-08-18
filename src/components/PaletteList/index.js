import React from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function PaletteList({ palettes }) {
  const paletteList = palettes.map((palette, index) => (
    <p>
      <Link key={index} to={`/palette/${palette.id}`}>
        {palette.paletteName}
      </Link>
    </p>
  ));

  return (
    <div>
      <h1>Palette List</h1>
      {paletteList}
    </div>
  );
}
