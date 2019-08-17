import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Container } from "./styles";

export default class ColorBox extends Component {
  render() {
    const { name, background } = this.props;

    return (
      <CopyToClipboard text={background}>
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
      </CopyToClipboard>
    );
  }
}
