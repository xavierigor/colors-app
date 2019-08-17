import React from "react";
import "./App.css";

import colors from "./seeds/Colors";
import { generatePalette } from "./colorHelpers";

import GlobalStyles from "./styles/global";
import Palette from "./components/Palette/index";

export default function App() {
  console.log(generatePalette(colors[4]));
  return (
    <>
      <Palette {...colors[2]} />

      <GlobalStyles />
    </>
  );
}
