import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Typography,
} from "@material-ui/core";
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    NotificationsNone as NotificationsIcon,
    MailOutline as MailIcon,
    Person as AccountIcon,
} from "@material-ui/icons";

import classNames from "classnames";
import useStyles from "./styles";

// context
import {
    useLayoutState,
    useLayoutDispatch,
    toggleSidebar,
} from "../../Context/LayoutContext";
import { useUserDispatch, signOut } from "../../Context/UserContext";

export default function Header(props) {
    const classes = useStyles();

    // global
    const layoutState = useLayoutState();
    const layoutDispatch = useLayoutDispatch();
    const userDispatch = useUserDispatch();

    // local
    const [mainMenu, setMainMenu] = useState(null);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [profileMenu, setProfileMenu] = useState(null);
    const [isMailsUnread, setIsMailsUnread] = useState(true);
    const [notificationsMenu, setNotificationsMenu] = useState(null);
    const [isNotificationsUnread, setIsNotificationsUnread] = useState(true);

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" weiht="medium" className={classes.logotype}>
                    Syntegrate
                </Typography>
                <div className={classes.grow} />
                <div className={classNames(classes.search, {[classes.searchFocused]: isSearchOpen,})}>
                    <div className={classNames(classes.searchIcon, {[classes.searchIconOpened]: isSearchOpen,})}
                        onClick={() => setSearchOpen(!isSearchOpen)}>
                        <SearchIcon classes={{ root: classes.headerIcon }} />
                    </div>
                    <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput}} />
                </div>
                <IconButton
                    className={classes.headerMenuButton}
                    color="inherit"
                    aria-haspopup="true"
                    aria-controls="mail-menu"
                    onClick={e => {setNotificationsMenu(e.currentTarget); setIsNotificationsUnread(false);}}>
                        <NotificationsIcon classes={{ root: classes.headerIcon }}/> 
                </IconButton>
                <IconButton
                    className={classes.headerMenuButton}
                    color="inherit"
                    aria-haspopup="true"
                    aria-controls="mail-menu">
                    <MailIcon classes={{ root: classes.headerIcon }}/>
                </IconButton>
                <IconButton
                    aria-haspopup="true"
                    color="inherit"
                    className={classes.headerMenuButton}
                    aria-controls="profile-menu"
                    onClick={e => setProfileMenu(e.currentTarget)}>
                    <AccountIcon classes={{ root: classes.headerIcon }}/>
                </IconButton>
                <Menu
                    id="profile-menu"
                    open={Boolean(profileMenu)}
                    anchorEl={profileMenu}
                    onClose={() => setProfileMenu(null)}
                    className={classes.headerMenu}
                    classes={{ paper: classes.profileMenu }}
                    disableAutoFocusItem
                >
                    <div className={classes.profileMenuUser}>
                        <Typography variant="h4" weight="light" color="textSecondary">
                            Inhwan Kim
                        </Typography>
                        <Typography color="textSecondary">
                            Syntegrate.build
                        </Typography>
                    </div>
                    <MenuItem>
                        <AccountIcon /> Profile
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}