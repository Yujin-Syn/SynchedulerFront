import { makeStyles } from "@material-ui/styles";

const drawerWidth = 240;

export default makeStyles(theme => ({
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    emptyList: {
        height: theme.spacing(8),
    },
    drawer: {
        backgroundColor: theme.palette.primary.dark,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        width: theme.spacing(7),
        [theme.breakpoints.down("sm")]: {
            width: drawerWidth,
        },
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: "hidden",
    },
    toolbar: {
        ...theme.mixins.toolbar,
        marginTop: theme.spacing(8),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    mobileBackButton: {
        bottom: theme.spacing(2),
        right: theme.spacing(0),
        position: "absolute",
        color: "#FFFFFF",
    },
    headerIcon: {
        color: "#FFFFFF",
    },
}));