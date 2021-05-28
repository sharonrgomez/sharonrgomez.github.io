import {makeStyles} from '@material-ui/core/styles'

export const drawerStyles = makeStyles((theme) => {
    const drawerWidth = 240

    return {
        root: {
            display: 'flex'
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0
            }
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
            background: 'linear-gradient(101deg, rgba(255,252,142,1) 0%, rgba(252,140,140,1) 46%, rgba(130,149,255,1) 100%)'

        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            },
        },
        drawerCard: {
            width: drawerWidth,
            background: 'linear-gradient(0deg, rgba(130,149,255,1) 0%, rgba(252,140,140,1) 46%, rgba(255,252,142,1) 100%)'
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3)
        },
        drawerLinksHeight: {
            marginTop: '4.5rem'
        },
        drawerLinks: {
            textDecoration: 'none',
            color: 'white'
        },
        drawerText: {
            textShadow: '0.1rem 0.1rem 0.15rem #2e2e2e',
            textAlign: 'center',
            margin: '0.8rem',
            fontSize: '1.3rem'
        }
    }
})