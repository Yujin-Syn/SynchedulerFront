import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div' : {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
}));