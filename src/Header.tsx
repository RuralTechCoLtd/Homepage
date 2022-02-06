import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import {
  Announcement,
  Apps,
  AssistantPhoto,
  Face,
  Link,
  Menu,
  Work,
} from "@mui/icons-material";

import "./Header.scss";

type Anchor = "top" | "left" | "bottom" | "right";

const DesignedListItemIcon = styled(ListItemIcon)(() => ({
  color: "white",
  textDecoration: "none",
  fontSize: "large",
}));

const Header: React.FC = () => {
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
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#aaa",
        position: "relative",
      }}
    >
      <Box
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        sx={{
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
        }}
      >
        <List>
          <ListItem button key={navlist[0]} component={HashLink} to="/#">
            <DesignedListItemIcon>
              <AssistantPhoto />
            </DesignedListItemIcon>
            <ListItemText
              primary={navlist[0]}
              sx={{
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
              }}
            />
          </ListItem>
          <ListItem
            button
            key={navlist[1]}
            component={NavLink}
            to="/About/AboutDetails"
          >
            <DesignedListItemIcon>
              <Work />
            </DesignedListItemIcon>
            <ListItemText primary={navlist[1]} />
          </ListItem>
          <ListItem component={HashLink} to="/#Services">
            <DesignedListItemIcon>
              <Apps />
            </DesignedListItemIcon>
            <ListItemText primary={navlist[2]} />
          </ListItem>
          <ListItem button key={navlist[3]} component={NavLink} to="/Greeting">
            <DesignedListItemIcon>
              <Face />
            </DesignedListItemIcon>
            <ListItemText primary={navlist[3]} />
          </ListItem>
          <ListItem
            button
            key={navlist[4]}
            component={NavLink}
            to="/News/Archive"
          >
            <DesignedListItemIcon>
              <Announcement />
            </DesignedListItemIcon>
            <ListItemText primary={navlist[4]} />
          </ListItem>
          <ListItem button key={navlist[5]} component={HashLink} to="/#Footer">
            <DesignedListItemIcon>
              <Link />
            </DesignedListItemIcon>
            <ListItemText primary={navlist[5]} />
          </ListItem>
        </List>
      </Box>
    </Box>
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
              <Menu sx={{ color: "#fff", fontSize: 50 }} />
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
