import React from "react";
import "./App.css";

import colors from "./seeds/Colors";
import { generatePalette } from "./colorHelpers";

import GlobalStyles from "./styles/global";
import Palette from "./components/Palette/index";

export default function App() {
  return (
    <>
      <Palette palette={generatePalette(colors[0])} />

      <GlobalStyles />
    </>
  );
}
