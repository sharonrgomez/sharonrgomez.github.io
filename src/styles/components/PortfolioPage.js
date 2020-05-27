import { makeStyles } from "@material-ui/core/styles";

const portfolioStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "1rem"
    },
    content: {
        padding: theme.spacing(3),
        flexGrow: 1,
        // desktop
        [theme.breakpoints.up("sm")]: {
            marginLeft: "15rem"
        },
        // mobile
        [theme.breakpoints.down("xs")]: {
            marginTop: "3rem"
        }
    },
    card: {
        height: "12rem",
        width: "17rem",
        boxShadow:
            "0px 2px 12px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    }
}));

export default portfolioStyles;