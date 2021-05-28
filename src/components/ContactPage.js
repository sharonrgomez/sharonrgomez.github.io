import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'

import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import {MuiThemeProvider} from '@material-ui/core/styles'

import {baseStyles, bgTheme} from '../styles/base'
import {contactStyles} from '../styles/components/ContactPage'


export const ContactPage = () => {
    const baseClasses = baseStyles()
    const classes = contactStyles()

    return (
        <MuiThemeProvider theme={bgTheme}>
            <CssBaseline />
            <main className={baseClasses.content}>
                <Card className={classes.content} variant='elevation'>
                    <CardContent>
                        <Typography className={classes.title} variant='h3'>Contact Me</Typography>

                        <Typography variant='subtitle1'>Feel free to contact me with any questions!</Typography>
                        
                        <div className={classes.alignIcons} >
                            <p className={classes.icons}><EmailIcon className={classes.eachIcon} />levinsrc@gmail.com</p>
                            <p className={classes.icons}><LocationOnIcon className={classes.eachIcon} />White Plains, NY</p>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </MuiThemeProvider>
    )
}
