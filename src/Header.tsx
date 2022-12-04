import React, { useState } from "react";

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
type LinkDataList = { title: string; linkTo: string; icon: JSX.Element };
const linkDataList: LinkDataList[] = [
  { title: "TOP", linkTo: "/#", icon: <AssistantPhoto /> },
  { title: "ABOUT", linkTo: "/AboutDetails", icon: <Work /> },
  { title: "SERVICES", linkTo: "/#Services", icon: <Apps /> },
  { title: "CEOGREETING", linkTo: "/Greeting", icon: <Face /> },
  { title: "NEWS ARCHIVE", linkTo: "/News/Archive", icon: <Announcement /> },
  { title: "LINKS", linkTo: "/#Footer", icon: <Link /> },
];

const Header: React.FC = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
          {linkDataList.map((item) => (
            <ListItem
              button
              key={item.title}
              component={HashLink}
              to={item.linkTo}
            >
              <DesignedListItemIcon>{item.icon}</DesignedListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
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
              <Menu sx={{ color: "#fff", fontSize: 45 }} />
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
