import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        // desktop
        [theme.breakpoints.up("sm")]: {
            marginLeft: "15rem"
        },
        // mobile
        [theme.breakpoints.down("xs")]: {
            marginTop: "3rem"
        }
    }
}));

const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <Typography variant="h3">404 - Page Not Found</Typography>
            <Typography variant="subtitle1"><Link to="/">Back to Dashboard</Link></Typography>
        </main>
    );
};

export default NotFoundPage;
