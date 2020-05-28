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
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import drawerStyles from "../styles/components/SideDrawer";

const SideDrawer = (props) => {
    const { window } = props;
    const classes = drawerStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const links = ["/", "/portfolio", "/contact"];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleCloseOnClick = () => {
        setMobileOpen(false);
    }

    const drawer = (
        <List className={classes.drawerLinksHeight}>
            {["ABOUT", "PORTFOLIO", "CONTACT"].map((text, link) => (
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