import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import portfolioStyles from "../styles/components/PortfolioPage";
import { bgTheme } from "../styles/base";

const Project = ({ title, desc, srcLink, demoLink, hasDemo = true }) => {
    const classes = portfolioStyles();
    return (
        <>
            <MuiThemeProvider theme={bgTheme}>
                <CssBaseline />
                <CardContent classes={{ root: classes.paddingBottom }} className={classes.cardContent}>
                    <div>
                        <Typography component={"span"}>
                            <Box fontWeight={500}>{title}</Box>
                        </Typography>
                        <Typography variant="caption">
                            {desc}
                        </Typography>
                    </div>
                    <CardActions classes={{ root: classes.buttonsRight }}>
                        <Button href={srcLink} target="_blank" size="large" color="primary">
                            <Box fontWeight={400}>Github</Box>
                        </Button>
                        {
                            hasDemo &&
                            <Button href={demoLink} target="_blank" size="large" color="primary">
                                <Box fontWeight={400}>Demo</Box>
                            </Button>
                        }
                    </CardActions>
                </CardContent>
            </MuiThemeProvider>
        </>
    );
};

export default Project;