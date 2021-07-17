import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Navbar.css";
//import { getThemeProps } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    paddingInlineEnd: "15px",
    color: "white 0.5"
  },
  titleMenu: {
    paddingInlineEnd: "2px",
    _whiteSpace: "-10px",
    get whiteSpace() {
      return this._whiteSpace;
    },
    set whiteSpace(value) {
      this._whiteSpace = value;
    },
    flexGrow: 0.5,
    color: "black"
  },
  appBarTransparent: {
    backgroundColor: "rgba(0, 0, 0,0.5)"
  },
  appBarSolid: {
    backgroundColor: "rgba(0, 0, 0)"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarSolid");
  const navRef = React.useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground("appBarTransparent");
      } else {
        setNavBackground("appBarSolid");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            SURAJ GUPTA
          </Typography>
          <Typography variant="subtitle1" className={classes.titleMenu}>
            <a href="#section-1" className="nav-link">
              About
            </a>
          </Typography>
          <Typography variant="subtitle1" className={classes.titleMenu}>
            <a href="#section-2" className="nav-link">
              Project
            </a>
          </Typography>
          <Typography variant="subtitle1" className={classes.titleMenu}>
            <a href="#section-3" className="nav-link">
              More
            </a>
          </Typography>
          <Typography variant="subtitle1" className={classes.titleMenu}>
            <a href="#section-4" className="nav-link">
              Contact
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
