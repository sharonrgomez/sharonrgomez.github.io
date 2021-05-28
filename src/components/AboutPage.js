import React from 'react'
import clsx from 'clsx'

import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'

import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import {MuiThemeProvider} from '@material-ui/core/styles'

import {baseStyles, bgTheme} from '../styles/base'
import {aboutStyles} from '../styles/components/AboutPage'

import me from '../assets/me.png'


export const AboutPage = () => {
    const baseClasses = baseStyles()
    const classes = aboutStyles()

    return (
        <MuiThemeProvider theme={bgTheme}>
            <CssBaseline />
            <main className={clsx(classes.textCentered, baseClasses.content)}>
                <div className={classes.container}>
                    <img src={me} className={classes.image} alt='A headshot of Sharon' />
                    
                    <div className={classes.about}>
                        <Typography className={classes.title} variant='h2'>Sharon R Levin</Typography>

                        <Typography className={classes.paragraph}>
                            Hi there! I'm a front-end developer who's passionate about art and technology.
                            I grew up in the Bronx but currently reside in White Plains.
                            Some hobbies I have include doodling, playing video games, and going to the movies.
                            Feel free to hit me up if you have any questions!
                        </Typography>

                        <div className={classes.icons}>
                            <a href='https://www.linkedin.com/in/sharon-rachel-levin/' target='_blank' title='LinkedIn' >
                                <LinkedInIcon className={classes.iconSize} />
                            </a>
                            <a href='https://github.com/shaerins' target='_blank' title='Github' >
                                <GitHubIcon className={classes.ghIconSize} />
                            </a>
                            <a href='https://www.facebook.com/shaerins' target='_blank' title='Facebook' >
                                <FacebookIcon className={classes.iconSize} />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </MuiThemeProvider>
    )
}