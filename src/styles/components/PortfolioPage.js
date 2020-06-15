import { makeStyles } from "@material-ui/core/styles";

const portfolioStyles = makeStyles((theme) => ({
    content: {
        padding: "6% 10%",
        flexGrow: 1,
        // mobile
        [theme.breakpoints.down("md")]: {
            marginTop: "3.5rem",
            padding: theme.spacing(3)
        },
        // desktop
        [theme.breakpoints.up("sm")]: {
            marginTop: "0",
            marginLeft: "15rem"
        }
    },
    title: {
        fontFamily: "'Galada', cursive",
        textShadow: "0.19rem 0.19rem 0px #ffffff"
    },
    desc: {
        textShadow: "1px 3px 1px #fff"
    },
    cards: {
        marginTop: "5%"
    },
    card: {
        height: "120%",
        width: "100%",
        boxShadow:
            "0px 2px 5px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        [theme.breakpoints.down("xs")]: {
            height: "110%"
        }
    },
    cardContent: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    paddingBottom: {
        "&:last-child": {
            paddingBottom: 0
        }
    },
    buttonsRight: {
        display: "inline-flex",
        justifyContent: "flex-end",
        paddingRight: 0
    },
    innerGridMargin: {
        marginBottom: "3%",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "1.8rem"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1%"
        }
    }
}));

export default portfolioStyles;