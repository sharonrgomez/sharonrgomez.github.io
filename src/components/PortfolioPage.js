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


const Project = ({ title, desc, srcLink, demoLink }) => {
  return (
    <>
      <MuiThemeProvider theme={bgTheme}>
        <CssBaseline />
        <CardContent>
          <Typography variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle2">
            {desc}
          </Typography>
          <CardActions>
            <Button href={srcLink} target="_blank" size="large" color="primary">
              Github
          </Button>
            <Button href={demoLink} target="_blank" size="large" color="primary">
              Live demo
          </Button>
          </CardActions>
        </CardContent>
      </MuiThemeProvider>
    </>
  );
};

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

const Indecision = () => (
  <Project
    title="indecision"
    desc="An app that helps you decide what you should do today."
    srcLink="https://github.com/shaerins/indecision-app"
    demoLink="https://myindecision.herokuapp.com/"
  />
);


const GithubSite = () => {
  return (
    <Project
      title="shaerins.github.io"
      desc="The page you're on right now!"
      srcLink="#"
      demoLink="#"
    />
  );
};

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
    demoLink="#"
  />
);

const projects = [<Gamerank />, <RestfulBlog />, <GithubSite />, <Hoodie />, <Corgi />, <Indecision />];

const Portfolio = () => {
  const classes = portfolioStyles();
  return (
    <main className={classes.content}>
      <Typography variant="h3">Projects</Typography>
      <Typography variant="subtitle1">Check out some of my work:</Typography>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {projects.map((project, index) => (
              <Grid key={index} item>
                <Card className={classes.card}>{project}</Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default Portfolio;
