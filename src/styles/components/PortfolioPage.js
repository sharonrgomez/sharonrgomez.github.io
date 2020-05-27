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
    }
}));

export default portfolioStyles;