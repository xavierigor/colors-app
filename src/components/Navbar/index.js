import React, { useState } from "react";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { Container } from "./styles";

export default function Navbar({ level, setLevel, changeFormat, showLevel }) {
  const [format, setFormat] = useState("hex");
  const [snackbar, setSnackbar] = useState(false);

  function handleChange(e) {
    setFormat(e.target.value);
    changeFormat(e.target.value); // coming from the props
    setSnackbar(true);
  }

  return (
    <Container>
      <div className="logo">
        <Link to="/">reactcolorpicker</Link>
      </div>
      {showLevel && (
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={setLevel}
            />
          </div>
        </div>
      )}
      <div className="select-container">
        <Select onChange={handleChange} value={format}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>

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
