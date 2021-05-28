import React from 'react'
import {NavLink} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'

import MenuIcon from '@material-ui/icons/Menu'

import {drawerStyles} from '../styles/components/SideDrawer'

export const SideDrawer = ({window, ...props}) => {
    const classes = drawerStyles()
    
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const links = ['/', '/portfolio', '/contact']

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const handleClose = () => {
        setMobileOpen(false)
    }

    const drawer = (
        <List className={classes.drawerLinksHeight}>
            {['ABOUT', 'PORTFOLIO', 'CONTACT'].map((text, link) => (
                <NavLink 
                    className={classes.drawerLinks} 
                    key={text} 
                    onClick={handleClose}
                    to={links[link]} 
                >
                    <ListItem button>
                        <ListItemText 
                            className={classes.drawerText} 
                            disableTypography={true} 
                            primary={text} 
                        />
                    </ListItem>
                </NavLink>
            ))}
        </List>
    )

    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Hidden smUp>
                <AppBar className={classes.appBar} position='fixed' >
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color='inherit'
                            edge='start'
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Hidden>

            <nav className={classes.drawer}>
                {/* hide drawer on mobile */}
                <Hidden smUp implementation='css'>
                    <Drawer
                        anchor='left'
                        classes={{paper: classes.drawerCard}}
                        container={container}
                        ModalProps={{keepMounted: true}}
                        onClose={handleDrawerToggle}
                        open={mobileOpen}
                        variant='temporary'
                    >
                        {drawer}
                    </Drawer>
                </Hidden>

                {/* show drawer on desktop */}
                <Hidden xsDown implementation='css'>
                    <Drawer
                        classes={{paper: classes.drawerCard}}
                        open
                        variant='permanent'
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}
