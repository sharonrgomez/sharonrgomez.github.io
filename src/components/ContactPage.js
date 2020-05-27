import React from "react";
import Typography from "@material-ui/core/Typography";
import { bgTheme, baseStyles } from "../styles/base";
import contactStyles from "../styles/components/ContactPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const ContactPage = () => {
    const baseClasses = baseStyles();
    const classes = contactStyles();

    return (
        <>
            <MuiThemeProvider theme={bgTheme}>
                <CssBaseline />
                <main className={baseClasses.content}>
                    <Card className={classes.content} variant="elevation">
                        <CardContent >
                            <Typography variant="h4">Contact Me</Typography>
                            <Typography variant="subtitle1">Feel free to contact me at any of the following:</Typography>
                            <div>
                                <p><EmailIcon />srcbun@gmail.com</p>
                                <p><PhoneAndroidIcon />(646) 406-0728</p>
                                <p><LocationOnIcon />White Plains, NY</p>
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </MuiThemeProvider>
        </>
    );
};

export default ContactPage;