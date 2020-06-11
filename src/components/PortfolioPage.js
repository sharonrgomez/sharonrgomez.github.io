import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { bgTheme } from "../styles/base";
import portfolioStyles from "../styles/components/PortfolioPage";
import Box from "@material-ui/core/Box";

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

const Budget = () => (
  <Project
    title="budget trackr"
    desc="An app that allows you to keep track of your expenses and bills."
    srcLink="https://github.com/shaerins/budget-trackr"
    demoLink="https://budgettrackr.herokuapp.com/"
  />
);

const Gamerank = () => (
  <Project
    title="gamerank"
    desc="A web app where people can rank and share their opinions on their favorite video games."
    srcLink="https://github.com/shaerins/gamerank"
    demoLink="https://mygamerank.herokuapp.com/"
  />
);

const RestfulBlog = () => (
  <Project
    title="restfulblog"
    desc="A blog where you can gather your thoughts. Demonstrates RESTful routing!"
    srcLink="https://github.com/shaerins/RESTful-Blog-App"
    demoLink="https://myrestfulblog.herokuapp.com/"
  />
);

const GithubSite = () => (
  <Project
    title="shaerins.github.io"
    desc="The page you're on right now!"
    srcLink="https://github.com/shaerins/shaerins.github.io"
    hasDemo={false}
  />
);

const Hoodie = () => (
  <Project
    title="hoodie"
    desc="Find out if the weather is currently suitable for wearing a hoodie outside."
    srcLink="https://github.com/shaerins/hoodie"
    demoLink="https://hoodie-2c3aa.web.app/"
  />
);

const Corgi = () => (
  <Project
    title="corgi museum"
    desc="Explore the wonderful world of corgis. Demonstrates responsiveness using Bootstrap."
    srcLink="https://github.com/shaerins/corgi"
    demoLink="https://corgi-museum.web.app/"
  />
);

const projects = [<Budget />, <Gamerank />, <RestfulBlog />, <Corgi />, <Hoodie />, <GithubSite />];

const Portfolio = () => {
  const classes = portfolioStyles();
  return (
    <main className={classes.content}>
      <Typography variant="h3" className={classes.title}>Projects</Typography>
      <Typography variant="subtitle1" className={classes.desc}>Check out some of my work:</Typography>
      <Grid container className={classes.cards} justify="center" spacing={3}>
        {projects.map((project, index) => (
          <Grid classes={{ item: classes.innerGridMargin }} key={index} item xs={12} sm={6} md={4}>
            <Card className={classes.card}>{project}</Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Portfolio;
