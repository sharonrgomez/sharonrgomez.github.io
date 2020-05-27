import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        // desktop
        [theme.breakpoints.up('sm')]: {
            marginLeft: "15rem"
        },
        // mobile
        [theme.breakpoints.down('xs')]: {
            marginTop: "3rem"
        }
    }
}));

const ContactPage = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <Typography variant="h3">Contact Me</Typography>
            <Typography variant="subtitle1">Feel free to contact me at any of the following:</Typography>
            <p>Email: srcbun@gmail.com</p>
            <p>Phone: (646) 406-0728</p>
            <p>Location: White Plains, NY</p>
        </main>
    );
};

export default ContactPage;