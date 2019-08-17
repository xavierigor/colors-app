import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Container } from "./styles";

export default function ColorBox({ name, background }) {
  const [copied, setCopied] = useState(false);

  async function changeCopyState() {
    await setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <Container background={background}>
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
        <span className="see-more">More</span>
      </Container>
    </CopyToClipboard>
  );
}
// import React, { Component, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";

// import { Container } from "./styles";

// export default class ColorBox extends Component {
//   render() {
//     const { name, background } = this.props;

//     const [copied, setCopied] = useState(false);

//     return (
//       <CopyToClipboard text={background}>
//         <Container background={background}>
//           <div className="copy-overlay" background={background} />

//           <div className="copy-container">
//             <div className="box-content">
//               <span>{name}</span>
//             </div>
//             <button className="copy-button" type="button">
//               Copy
//             </button>
//           </div>
//           <span className="see-more">More</span>
//         </Container>
//       </CopyToClipboard>
//     );
//   }
// }
