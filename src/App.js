import React from "react";
import "./App.css";

import colors from "./seeds/Colors";

import GlobalStyles from "./styles/global";
import Palette from "./components/Palette/index";

function App() {
  return (
    <>
      <Palette {...colors[2]} />

      <GlobalStyles />
    </>
  );
}

export default App;
