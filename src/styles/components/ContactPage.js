import {makeStyles} from '@material-ui/core/styles'

export const contactStyles = makeStyles((theme) => ({
    content: {
        margin: '0 20% 0 33%',
        padding: '2rem 0rem 1rem 1.5rem',
        width: '33%',
        boxShadow:
            '0px 2px 12px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        [theme.breakpoints.down('md')]: {
            margin: '0 24%',
            width: '54%'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0 3%',
            width: '95%'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0',
            margin: '2rem 0 0 0',
            width: '100%'
        }
    },
    title: {
        fontFamily: "'Galada', cursive",
        textShadow: '0.19rem 0.19rem 0px #bababa'
    },
    eachIcon: {
        marginRight: '1rem',
        color: '#7457bd',
        fontSize: '2rem'
    },
    alignIcons: {
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '1rem'
    },
    icons: {
        marginRight: '1rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}))