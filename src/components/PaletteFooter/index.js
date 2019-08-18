import React from "react";

import { Container } from "./styles";

export default function PaletteFooter({ paletteName, emoji }) {
  return (
    <Container>
      <h4>{paletteName}</h4>
      <span className="emoji">{emoji}</span>
    </Container>
  );
}
