import React, { useState } from "react";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { Container } from "./styles";

import Navbar from "../Navbar";
import ColorBox from "../ColorBox";

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const [snackbar, setSnackbar] = useState(false);

  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox key={color.id} background={color[format]} name={color.name} />
  ));

  async function changeFormat(value) {
    await setFormat(value);
    setSnackbar(true);
  }

  return (
    <Container>
      <Navbar level={level} setLevel={setLevel} changeFormat={changeFormat} />
      <div className="Palette-colors">{colorBoxes}</div>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbar}
        onClose={() => setSnackbar(false)}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed to {format.toUpperCase()}!</span>
        }
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        action={
          <IconButton
            onClick={() => setSnackbar(false)}
            key="close"
            aria-label="close"
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </Container>
  );
}
