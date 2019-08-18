import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function ColorBox({
  name,
  background,
  showLink,
  colorId,
  paletteId,
  isTall
}) {
  const [copied, setCopied] = useState(false);

  async function changeCopyState() {
    await setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <Container background={background} isTall={isTall}>
        <div
          className={`copy-overlay ${copied && "show"}`}
          background={background}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>

        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button" type="button">
            Copy
          </button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={e => e.stopPropagation()}
          >
            <span className="see-more">More</span>
          </Link>
        )}
      </Container>
    </CopyToClipboard>
  );
}
