import React from "react";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import clsx from "clsx";
import { bgTheme, baseStyles } from "../styles/base";
import aboutStyles from "../styles/components/AboutPage";
import me from "../assets/me.png";
import resume from "../assets/resume.pdf";

const AboutPage = () => {
    const baseClasses = baseStyles();
    const classes = aboutStyles();
    return (
        <>
            <MuiThemeProvider theme={bgTheme}>
                <CssBaseline />
                <main className={clsx(classes.textCentered, baseClasses.content)}>
                    <div className={classes.container}>
                        <img src={me} className={classes.image} aria-label="A photo of Sharon" />
                        <div className={classes.about}>
                            <Typography className={classes.title} variant="h2">Sharon L evin</Typography>
                            <Typography className={classes.paragraph}>
                                Hi there! I'm a front-end web developer who's passionate about art and technology.
                                I'm a SUNY Purchase graduate with a Bachelor's in Computer Science. Some hobbies I have include
                                doodling, gaming, and going to the movies. Here's a link to my
                                <a className={classes.link} href={resume} target="_blank"> resume</a>,
                                feel free to contact me if you have any questions!
                            </Typography>
                            <div className={classes.icons}>
                                <a href="https://www.linkedin.com/in/sharon-rachel-levin/" target="_blank" title="LinkedIn" >
                                    <LinkedInIcon className={classes.iconSize} />
                                </a>
                                <a href="https://github.com/shaerins" target="_blank" title="Github" >
                                    <GitHubIcon className={classes.ghIconSize} />
                                </a>
                                <a href="https://www.facebook.com/shaerins" target="_blank" title="Facebook" >
                                    <FacebookIcon className={classes.iconSize} />
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </MuiThemeProvider>
        </>
    );
};

export default AboutPage;