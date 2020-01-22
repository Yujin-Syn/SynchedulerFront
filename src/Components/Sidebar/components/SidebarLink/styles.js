import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    link: {
        marginTop: theme.spacing(.5),
        "&:hover, &:focus": {
            backgroundColor: "#3867d6",
        },
    },
    linkNested: {
        paddingLeft: 0,
    },
    linkIcon: {
        marginRight: theme.spacing(1),
        color: "#FFFFFF",
        transition: theme.transitions.create("color"),
        display: "flex",
    },
    collapseIcon: {
        right: theme.spacing(0),
        minWidth: theme.spacing(1),
        color: "#FFFFFF",
    },
    linkText: {
        padding: 0,
        color: theme.palette.text.secondary,
        transition: theme.transitions.create(["opacity", "color"]),
        fontSize: 16,
        fontWeight: 400,
    },
    linkTextHidden: {
        opacity: 0
    },
    nestedList: {
        marginLeft: theme.spacing(3),
    },
    sectionTitle:{
        marginLeft: theme.spacing(4.5),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    divider:{
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        height: 1,
        backgroundColor: "#D8D8D880",
    }, 
})); 