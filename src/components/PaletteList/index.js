import React from "react";
import { Link } from "react-router-dom";

import { Container, MiddleContainer } from "./styles";

import MiniPalette from "../MiniPalette";

export default function PaletteList({ palettes, routeProps }) {
  const miniPalettes = palettes.map((palette, index) => (
    <MiniPalette
      handleMiniPaletteClick={() =>
        routeProps.history.push(`palette/${palette.id}`)
      }
      key={index}
      palette={palette}
    />
  ));

  return (
    <Container>
      <MiddleContainer>
        <nav>
          <Link to="/">
            <h1>reactcolorpicker</h1>
          </Link>
          <Link to="/palette/create" className="create-new-palette">
            Create New Palette
          </Link>
        </nav>
        <div className="palettes">{miniPalettes}</div>
      </MiddleContainer>
    </Container>
  );
}
