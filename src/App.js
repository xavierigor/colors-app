import React from "react";
import "./App.css";

import colors from "./seeds/Colors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

import GlobalStyles from "./styles/global";
import Palette from "./components/Palette/index";
import PaletteList from "./components/PaletteList";

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
          render={() => <PaletteList palettes={colors} />}
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
      </Switch>

      <GlobalStyles />
    </>
  );
}
