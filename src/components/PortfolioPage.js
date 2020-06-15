import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Project from "./Project";
import portfolioStyles from "../styles/components/PortfolioPage";

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
          <Grid classes={{ item: classes.innerGridMargin }} key={index} item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>{project}</Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Portfolio;
