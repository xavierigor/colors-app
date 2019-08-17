import React, { Component } from "react";

import { Container } from "./styles";

export default class ColorBox extends Component {
  render() {
    return (
      <Container background={this.props.background}>
        <span>{this.props.name}</span>
        <span>MORE</span>
      </Container>
    );
  }
}
