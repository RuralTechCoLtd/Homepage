import "./Header.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssistantPhotoIcon from "@material-ui/icons/AssistantPhoto";
import WorkIcon from "@material-ui/icons/Work";
import AppsIcon from "@material-ui/icons/Apps";
import FaceIcon from "@material-ui/icons/Face";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import LinkIcon from "@material-ui/icons/Link";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  list: {
    width: "80vw",
    maxWidth: "300px",
    backgroundColor: "#aaa",
    color: "white",
    "& .MuiListItemText-root": {
      color: "white",
      textDecoration: "none",
    },
    "& .MuiListItemText-root span": {
      textDecoration: "none",
    },
  },
  root: {
    height: "100vh",
    backgroundColor: "#aaa",
    position: "relative",
  },
  text: {
    color: "white",
    textDecoration: "none",
    fontSize: "large",
  },
});

const theme = createTheme({
  typography: {
    fontSize: 25,
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

const Header: React.FC = () => {
  function foo(bar: any) {
    console.log(bar);
  }

  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navlist: string[] = [
    "TOP",
    "ABOUT",
    "SERVICES",
    "CEOGREETING",
    "NEWS ARCHIVE",
    "LINKS",
  ];
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const list = (anchor: Anchor) => (
    <div className={classes.root}>
      <div
        className={classes.list}
        // className={clsx(classes.list, {
        //   [classes.fullList]: anchor === "top" || anchor === "bottom",
        // })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem button key={navlist[0]} component={HashLink} to="/#">
            <ListItemIcon className={classes.text}>
              <AssistantPhotoIcon />
            </ListItemIcon>
            <ListItemText primary={navlist[0]} className={classes.text} />
          </ListItem>
          <ListItem
            button
            key={navlist[1]}
            component={NavLink}
            to="/About/AboutDetails"
          >
            <ListItemIcon className={classes.text}>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={navlist[1]} />
          </ListItem>
          {/* <NavLink
            to="/#Services"
            isActive={() => {
              return window.location.hash === "#Services";
            }}
          >
            <ListItem>
              <ListItemIcon className={classes.text}>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={navlist[1]} />
            </ListItem>
          </NavLink> */}
          {/* <ListItem
            button
            key={navlist[1]}
            component={() => {
              return NavLink({
                to: "/#Services",
                isActive: () => {
                  return window.location.hash === "#Services";
                },
              });
            }}
          >
            <ListItemIcon className={classes.text}>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary={navlist[1]} />
          </ListItem> */}
          {/* // kesitemoiiyo */}
          {/* <NavLink
            to="/#Services"
            isActive={() => {
              return window.location.hash === "#Services";
            }}
          > */}
          <ListItem component={HashLink} to="/#Services">
            <ListItemIcon className={classes.text}>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText
              primary={navlist[2]}
              // onClick={() => {
              //   foo(NavLink);
              // }}
            />
          </ListItem>
          {/* </NavLink>
          // kesitemoiiyo */}
          {/* <ListItem
            button
            key={navlist[1]}
            component={() => {
              return NavLink({
                to: "/#Services",
                isActive: () => {
                  return window.location.hash === "#Services";
                },
              });
            }}
          >
            <ListItemIcon className={classes.text}>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText
              primary={navlist[1]}
              onClick={() => {
                foo(NavLink);
              }}
            />
          </ListItem> */}
          <ListItem button key={navlist[3]} component={NavLink} to="/Greeting">
            <ListItemIcon className={classes.text}>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary={navlist[3]} />
          </ListItem>
          <ListItem
            button
            key={navlist[4]}
            component={NavLink}
            to="/News/Archive"
          >
            <ListItemIcon className={classes.text}>
              <AnnouncementIcon />
            </ListItemIcon>
            <ListItemText primary={navlist[4]} />
          </ListItem>
          <ListItem button key={navlist[5]} component={HashLink} to="/#Footer">
            <ListItemIcon className={classes.text}>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary={navlist[5]} />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <header className="Header">
      <h2 className="Header__site-name">Rural Tech</h2>
      <div className="Header__hamburger-button">
        {(["right"] as Anchor[]).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              style={{
                position: "relative",
                top: "50%",
                display: "block",
                margin: "0 auto",
              }}
              onClick={toggleDrawer(anchor, true)}
            >
              <ThemeProvider theme={theme}>
                <MenuIcon style={{ color: "#fff" }} />
              </ThemeProvider>
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <h4 className="Header__scrolldown">scroll down</h4>
    </header>
  );
};
export default Header;
