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
          <h1>Palette List</h1>
          <Link to="/palette/create">Create New Palette</Link>
        </nav>
        <div className="palettes">{miniPalettes}</div>
      </MiddleContainer>
    </Container>
  );
}
