import React, { Component } from "react";

import { Container } from "./styles";

import ColorBox from "../ColorBox";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));

    return (
      <Container>
        <div className="Palette-colors">{colorBoxes}</div>
      </Container>
    );
  }
}
