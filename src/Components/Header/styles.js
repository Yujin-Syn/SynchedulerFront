import {} from "@material-ui/styles";
import { makeStyles, fade } from "@material-ui/core";

export default makeStyles(theme => ({
    logotype:{
        whiteSpace: "nowrap", 
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    appBar:{
        width: "100vw",
        zIndex: theme.zIndex.drawer + 1,
    },
    toolbar:{
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        color: "#FFFFFF",
    },
    hide:{
        display: "none",
    },
    grow:{
        flexGrow: 1, 
    },
    search:{
        position: "relative",
        borderRadius: 25,
        paddingLeft: theme.spacing(2.5),
        width: 36,
        transition: theme.transitions.create(['background-color', 'width']),
        "&:hover" : {
            cursor: "pointer",
            backgroundColor: fade(theme.palette.secondary.main, 0.5),
        }
    },
    searchFocused:{
        backgroundColor: fade(theme.palette.secondary.main, 0.5),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 250,
        }
    },
    searchIcon:{
        width: 36,
        right: 0,
        height: "100%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: theme.transitions.create("right"),
        "&:hover": {
            cursor: "pointer",
        }
    },
    SearchIconOpened:{
        right: theme.spacing(1.25),
    },
    inputRoot:{
        color: "inherit",
        width: "100%",
    },
    inputInput: {
        height: 36,
        padding: 0,
        paddingRight: 36 + theme.spacing(1.25),
        width: "100%",
    },
    messageContent: {
        display: "flex",
        flexDirection: "column",
      },
      headerMenu: {
        marginTop: theme.spacing(7),
      },
      headerMenuList: {
        display: "flex",
        flexDirection: "column",
      },
      headerMenuItem: {
        "&:hover, &:focus": {
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
      },
      headerMenuButton: {
        marginLeft: theme.spacing(2),
        padding: theme.spacing(0.5),
      },
      headerMenuButtonCollapse: {
        marginRight: theme.spacing(2),
      },
      headerIcon: {
        fontSize: 28,
        color: "rgba(255, 255, 255, 0.75)",
      },
      headerIconCollapse: {
        color: "white",
      },
    profileMenu:{
        minWidth: 300,
    },
    profileMenuUser:{
        display: "flex",
        flexDirection: "column",
    },
    profileMenuItem:{
        color: theme.palette.text.secondary.dark,
    },
    profileMenuIcon:{
        color: theme.palette.text.secondary, 
    },
    profileMenuLink:{
        fontSize: 16,
        textDecoration: "none",
    },
    messageNotification:{
        height: "auto",
        display: "flex",
        alignItems: "center",
        marginRight: theme.spacing(2),
    },
    messageNotificationSide:{},
    messageNotificationBodySide:{},
    sendMessageButton:{},
    sendButtonIcon:{},
}));