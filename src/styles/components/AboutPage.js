import { makeStyles } from "@material-ui/core/styles";

const aboutStyles = makeStyles((theme) => ({
    iconSize: {
        fontSize: "3rem",
        color: "#7457bd"
    },
    ghIconSize: {
        fontSize: "2.5rem",
        color: "#7457bd"
    },
    icons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    about: {
        [theme.breakpoints.up("md")]: {
            padding: "0 1rem"
        },
        [theme.breakpoints.up("lg")]: {
            padding: "0 2rem"
        }
    },
    title: {
        [theme.breakpoints.down("md")]: {
            fontSize: "3rem"
        },
        [theme.breakpoints.down("xs")]: {
            margin: "0",
            padding: "0",
            fontSize: "2rem"
        }
    },
    paragraph: {
        [theme.breakpoints.down("sm")]: {
            margin: "0",
            padding: "0"
        }
    },
    image: {
        borderRadius: "50%",
        width: "13rem",
        // screens smaller than xs
        [theme.breakpoints.down("xs")]: {
            width: "8rem"
        }
    },
    container: {
        [theme.breakpoints.up("md")]: {
            padding: "0 12%",
            display: "flex",
            alignItems: "center"
        },
        [theme.breakpoints.up("lg")]: {
            padding: "0 18%"
        }
    }
}));

export default aboutStyles;