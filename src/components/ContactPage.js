import React from "react";
import Typography from "@material-ui/core/Typography";
import { bgTheme, baseStyles } from "../styles/base";
import contactStyles from "../styles/components/AboutPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

const ContactPage = () => {
    const baseClasses = baseStyles();
    // const classes = contactStyles();

    return (
        <>
            <MuiThemeProvider theme={bgTheme}>
                <CssBaseline />
                <main className={baseClasses.content}>
                    <Typography variant="h3">Contact Me</Typography>
                    <Typography variant="subtitle1">Feel free to contact me at any of the following:</Typography>
                    <p>Email: srcbun@gmail.com</p>
                    <p>Phone: (646) 406-0728</p>
                    <p>Location: White Plains, NY</p>
                </main>
            </MuiThemeProvider>
        </>
    );
};

export default ContactPage;