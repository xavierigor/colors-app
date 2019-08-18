import React, { useState } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { Container } from "./styles";

export default function Navbar({ level, setLevel, changeFormat }) {
  const [format, setFormat] = useState("hex");

  function handleChange(e) {
    setFormat(e.target.value);
    changeFormat(e.target.value);
  }

  return (
    <Container>
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
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
      <div className="select-container">
        <Select onChange={handleChange} value={format}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
    </Container>
  );
}
