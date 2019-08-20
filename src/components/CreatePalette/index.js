import React, { useState } from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ChromePicker } from "react-color";
import chroma from "chroma-js";

import DraggableColorBox from "../DraggableColorBox";

import { Container } from "./styles";

const drawerWidth = 340;

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState({
    name: "",
    color: "#3D3C3C"
  });
  const [colors, setColors] = useState([
    { name: "Purple", color: "purple" },
    { name: "Sky Pink", color: "#ece" },
    { name: "Green", color: "green" },
    { name: "Gray", color: "gray" },
    { name: "Lightgray", color: "lightgray" },
    { name: "Olive", color: "olive" }
  ]);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <Container>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
              Create A Palette
            </Typography>
            <Link to="/" className="appbar-link">
              Go Back
            </Link>
            <Button>Save Palette</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className="drawer-content">
            <h5 className="drawer-title">
              Design Your Palette{" "}
              <span role="img" aria-label="emoji">
                🎨
              </span>
            </h5>

            <div className="small-buttons">
              <Button
                onClick={() => setColors([])}
                variant="contained"
                color="secondary"
              >
                Clear Palette
              </Button>
              <Button variant="contained" color="primary">
                Random Color
              </Button>
            </div>
            <ChromePicker
              className="picker"
              color={currentColor.color}
              onChangeComplete={newColor =>
                setCurrentColor({
                  name: currentColor.name,
                  color: newColor.hex
                })
              }
            />
            <TextField
              required
              className="text-field"
              autoComplete="off"
              id="color-name"
              label="Color Name"
              value={currentColor.name}
              onChange={e =>
                setCurrentColor({
                  name: e.target.value,
                  color: currentColor.color
                })
              }
            />
            <Button
              className="big-button"
              style={{
                width: "100%",
                backgroundColor: currentColor.color,
                color:
                  chroma(currentColor.color).luminance() <= 0.3
                    ? "#fff"
                    : "#000"
              }}
              variant="contained"
              onClick={() =>
                setColors([
                  ...colors,
                  { name: currentColor.name, color: currentColor.color }
                ])
              }
            >
              Add Color
            </Button>
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />

          {colors.map((color, i) => (
            <DraggableColorBox
              key={i}
              background={color.color}
              name={color.name}
            />
          ))}
        </main>
      </div>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  title: {
    flexGrow: 1,
    fontWeight: 500,
    fontSize: 18
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(0),
    paddingight: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    paddingTop: 1,
    // padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    height: "100vh"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));
