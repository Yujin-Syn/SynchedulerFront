import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  AddBox as AddBoxIcon,
  WebAsset as WebAssetIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  AttachFile as FileIcon,
  Work as TaskIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../Context/LayoutContext";

const topElements = [
  { id: 0, label: "New", link: "/app/projects", icon: <AddBoxIcon /> },
  { id: 1, label: "Projects", link: "/app/projects", icon: <WebAssetIcon /> },
  { id: 2, label: "My Works", link: "/app/projects", icon: <PersonOutlineOutlinedIcon /> },
]

const bookmarks = [
  {
    id: 3,
    label: "Bookmark",
    link: "/app/project",
    children: [],
  }]

const recents = [
  {
    id: 4,
    label: "Recent",
    link: "/app/project",
    children: [
      { label: "project 1", link: "" },
      { label: "project 2", link: "" },
      { label: "project 3", link: "" },
      { label: "project 4", link: "" },
      { label: "project 5", link: "" },
      { label: "project 6", link: "" },
    ],
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  const theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames(classes.drawer,{
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <List className={classes.sidebarList}>
        {topElements.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
      <div className={classes.emptyList} />  
      <List className={classes.sidebarList}>
        {bookmarks.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
      <div className={classes.emptyList} />
      <List className={classes.sidebarList}>
        {recents.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
            {
                isSidebarOpened ? 
                <ArrowBackIosIcon
                    classes={{ root: classNames(classes.headerIcon, classes.headerIconCollapse), }}
                />
                :
                <ArrowForwardIosIcon 
                    classes={{ root: classNames(classes.headerIcon, classes.headerIconCollapse), }}
                />
            }
        </IconButton>
      </div>
    </Drawer>
  );

  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
