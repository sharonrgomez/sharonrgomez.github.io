import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import me from "../assets/me.png";

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: "30vh 5rem 5rem 5rem",
        position: "relative",
        textAlign: "center",
        // desktop
        [theme.breakpoints.up("sm")]: {
            marginLeft: "15rem"
        },
        // mobile
        [theme.breakpoints.down("xs")]: {
            marginTop: "3rem"
        }
    },
    iconSize: {
        fontSize: "3rem",
    },
    icons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    about: {
        [theme.breakpoints.up("md")]: {
            padding: "0 20% 0 2rem"
        }
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            margin: "0",
            padding: "0"
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "3rem"
        }
    },
    paragraph: {
        [theme.breakpoints.down("xs")]: {
            margin: "0",
            padding: "0"
        }
    },
    image: {
        [theme.breakpoints.down("xs")]: {
            marginRight: "3rem"
        },
        borderRadius: "50%",
        width: "13rem",
        height: "13rem",
    },
    container: {
        [theme.breakpoints.up("md")]: {
            padding: "0 0 0 15%",
            display: "flex",
            alignItems: "center"
        }
    }
}));

const AboutPage = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.container}>
                <img src={me} className={classes.image} />
                <div className={classes.about}>
                    <Typography className={classes.title} variant="h2">Sharon Levin</Typography>
                    <Typography className={classes.paragraph} variant="subtitle1" component="p">
                        Hi there! I'm a front-end web developer who's passionate about art and technology.
                        I'm a SUNY Purchase graduate with a Bachelor's in Computer Science. Some hobbies I have include
                        doodling, gaming, and going to the movies.
                    </Typography>
                    <div className={classes.icons}>
                        <a href="https://www.linkedin.com/in/sharon-rachel-levin/" target="_blank" >
                            <LinkedInIcon className={classes.iconSize} />
                        </a>
                        <a href="https://github.com/shaerins" target="_blank" >
                            <GitHubIcon style={{ fontSize: "2.5rem" }} />
                        </a>
                        <a href="https://www.facebook.com/shaerins" target="_blank" >
                            <FacebookIcon className={classes.iconSize} />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;