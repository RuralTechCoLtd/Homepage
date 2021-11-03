import "./Header.scss";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
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
    width: 500,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

const Header: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navlist: string[] = [
    "ABOUT",
    "SERVICES",
    "CEOGREETING",
    "NEWS ARCHIVE",
    "LINKS",
    "TOP",
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
  // リアクトフック実用例、アロー関数ではないVer
  const [hoge, setHoge] = useState<string>("");

  function huga(moge: string) {
    console.log(moge);
    return undefined;
  }
  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {navlist.map((text, index) => (
          <ListItem button key={text}>
          <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <NavLink to="/">
          <div onClick={huga("moge")}>
            <ListItem button key={navlist[5]}>
              <ListItemIcon>
                <AssistantPhotoIcon />
              </ListItemIcon>
              <ListItemText primary={navlist[5]} />
            </ListItem>
          </div>
        </NavLink>
        <NavLink to="/About/AboutDetails">
          <div onClick={huga("moge")}>
            <ListItem button key={navlist[0]}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={navlist[0]} />
            </ListItem>
          </div>
        </NavLink>
        <Link to="/">
          <ListItem button key={navlist[1]}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary={navlist[1]} />
          </ListItem>
        </Link>
        <Link to="/Greeting">
          <ListItem button key={navlist[2]}>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary={navlist[2]} />
          </ListItem>
        </Link>
        <Link to="/News/Archive">
          <ListItem button key={navlist[3]}>
            <ListItemIcon>
              <AnnouncementIcon />
            </ListItemIcon>
            <ListItemText primary={navlist[3]} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/">
          <ListItem button key={navlist[4]}>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary={navlist[4]} />
          </ListItem>
        </Link>
      </List>
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
              <MenuIcon fontSize="large" style={{ color: "#fff" }} />
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
