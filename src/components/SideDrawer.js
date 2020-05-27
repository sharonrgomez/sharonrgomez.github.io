import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        background: "linear-gradient(101deg, rgba(255,252,142,1) 0%, rgba(252,140,140,1) 46%, rgba(130,149,255,1) 100%);"

    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        },
    },
    drawerCard: {
        width: drawerWidth,
        background: "linear-gradient(0deg, rgba(130,149,255,1) 0%, rgba(252,140,140,1) 46%, rgba(255,252,142,1) 100%)"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    drawerLinksHeight: {
        marginTop: "4.5rem"
    },
    drawerLinks: {
        textDecoration: "none",
        color: "white"
    },
    drawerText: {
        textShadow: "0.08rem 0.08rem 0.3rem #000",
        textAlign: "center",
        margin: "0.8rem",
        fontSize: "1.3rem"
    }
}));

const SideDrawer = (props) => {
    const { window } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const links = ["/about", "/portfolio", "/contact"];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleCloseOnClick = () => {
        setMobileOpen(false);
    }

    const drawer = (
        <List className={classes.drawerLinksHeight}>
            {["About", "Portfolio", "Contact"].map((text, link) => (
                <NavLink className={classes.drawerLinks} to={links[link]} key={text} onClick={handleCloseOnClick}>
                    <ListItem button>
                        <ListItemText disableTypography={true} className={classes.drawerText} primary={text} />
                    </ListItem>
                </NavLink>
            ))}
        </List>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Hidden smUp>
                <AppBar className={classes.appBar} position="fixed" >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Hidden>
            <nav className={classes.drawer}>
                {/* hide drawer on mobile */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor="left"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerCard,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>

                {/* show drawer on desktop */}
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerCard,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
};

export default SideDrawer;