import React from "react";
import "./App.css";

import colors from "./seeds/Colors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

import GlobalStyles from "./styles/global";
import Palette from "./components/Palette/index";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";

export default function App() {
  function findPalette(id) {
    return colors.find(palette => palette.id === id);
  }

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={colors} routeProps={routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          path="/palette/:id/:color"
          render={() => <SingleColorPalette />}
        />
      </Switch>

      <GlobalStyles />
    </>
  );
}
