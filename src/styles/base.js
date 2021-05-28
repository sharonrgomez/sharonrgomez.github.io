import {createMuiTheme, makeStyles} from '@material-ui/core'

export const bgTheme = createMuiTheme({
    palette: {
        background: {
            default: 'rgba(77,125,125,0.03)'
        }
    }
})

export const baseStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        position: 'relative',
        // screens smaller than md
        [theme.breakpoints.down('md')]: {
            padding: '25vh 1.5rem 1rem 1.5rem'
        },
        // screens smaller than xs
        [theme.breakpoints.down('xs')]: {
            marginTop: '6rem',
            padding: '1.5rem'
        },
        // screens bigger than sm
        [theme.breakpoints.up('sm')]: {
            marginLeft: '15rem',
            paddingTop: '20vh'
        },
        // screens bigger than md
        [theme.breakpoints.up('md')]: {
            paddingTop: '30vh'
        }
    }
}))