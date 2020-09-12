import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Project from "./Project";
import portfolioStyles from "../styles/components/PortfolioPage";
import node from "../assets/icons/node.png";
import react from "../assets/icons/react.png";
import bootstrap from "../assets/icons/bootstrap.png";
import sass from "../assets/icons/sass.png";
import semantic from "../assets/icons/semantic.png";

const Budget = () => (
  <Project
    title="budget trackr"
    desc="An app that allows you to keep track of your expenses and bills."
    srcLink="https://github.com/shaerins/budget-trackr"
    demoLink="https://budgettrackr.herokuapp.com/"
    mainIconDesc={iconDescs.react}
    mainIcon={react}
    secondaryIcon={sass}
    secondaryIconDesc={iconDescs.sass}
  />
);

const Gamerank = () => (
  <Project
    title="gamerank"
    desc="A web app where people can rank and share their opinions on their favorite video games."
    srcLink="https://github.com/shaerins/gamerank"
    demoLink="https://mygamerank.herokuapp.com/"
    mainIcon={node}
    mainIconDesc={iconDescs.node}
    secondaryIcon={bootstrap}
    secondaryIconDesc={iconDescs.bootstrap}
  />
);

const RestfulBlog = () => (
  <Project
    title="restfulblog"
    desc="A simple blog that demonstrates RESTful routing!"
    srcLink="https://github.com/shaerins/RESTful-Blog-App"
    demoLink="https://myrestfulblog.herokuapp.com/"
    mainIcon={node}
    mainIconDesc={iconDescs.node}
    secondaryIcon={semantic}
    secondaryIconDesc={iconDescs.semantic}
  />
);

const RinBlog = () => (
  <Project
    title="rinblog"
    desc="A blogging app that gives you the freedom to unleash your mind."
    srcLink="https://github.com/shaerins/rinblog"
    demoLink="https://rin-blog.web.app/"
    mainIcon={react}
    mainIconDesc={iconDescs.react}
    secondaryIcon={semantic}
    secondaryIconDesc={iconDescs.semantic}
    thirdIcon={sass}
    thirdIconDesc={iconDescs.sass}
  />
);

const Hoodie = () => (
  <Project
    title="Can I Wear a Hoodie Today"
    desc="Find out if the weather is currently suitable for wearing a hoodie outside."
    srcLink="https://github.com/shaerins/hoodie"
    demoLink="https://caniwearahoodie.web.app/"
    mainIcon={react}
    mainIconDesc={iconDescs.react}
    secondaryIcon={sass}
    secondaryIconDesc={iconDescs.sass}
  />
);

const Corgi = () => (
  <Project
    title="corgi museum"
    desc="Explore the wonderful world of corgis. Demonstrates responsiveness using Bootstrap."
    srcLink="https://github.com/shaerins/corgi"
    demoLink="https://corgi-museum.web.app/"
    mainIcon={bootstrap}
    mainIconDesc={iconDescs.bootstrap}
  />
);

const iconDescs = {
  react: "React",
  node: "Node",
  jquery: "jQuery",
  bootstrap: "Bootstrap",
  sass: "SCSS",
  material: "Material UI",
  semantic: "Semantic UI"
}

const projects = [<RinBlog />, <Budget />, <Gamerank />, <Hoodie />, <Corgi />, <RestfulBlog />];

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
