import {makeStyles} from '@material-ui/core/styles'

export const notFoundStyles = makeStyles((theme) => ({
    uhOhContent: {
        margin: '0 20% 0 33%',
        textAlign: 'center',
        [theme.breakpoints.up('lg')]: {
            width: '33%'
        },
        [theme.breakpoints.down('md')]: {
            margin: '0 24%',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0 3%',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '2rem 0 0 0',
        }
    },
    title: {
        fontWeight: '400'
    },
    subtitle: {
        fontWeight: '300',
    },
    message: {
        margin: '1.2rem 0'
    }
}))