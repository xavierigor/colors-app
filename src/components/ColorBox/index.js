import React, { Component } from "react";

import { Container } from "./styles";

export default class ColorBox extends Component {
  render() {
    const { name, background } = this.props;

    return (
      <Container background={background}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button" type="button">
            Copy
          </button>
        </div>
        <span className="see-more">More</span>
      </Container>
    );
  }
}
