import React from 'react'
import {Link} from 'react-router-dom'

import Typography from '@material-ui/core/Typography'

import {baseStyles} from '../styles/base'
import {notFoundStyles} from '../styles/components/NotFoundPage'

export const NotFoundPage = () => {
    const baseClasses = baseStyles()
    const classes = notFoundStyles()

    return (
        <main className={baseClasses.content}>
            <div className={classes.uhOhContent}>
                <Typography className={classes.title} variant='h1'>404</Typography>

                <Typography className={classes.subtitle} variant='h3'>Page Not Found</Typography>

                <Typography className={classes.message} variant='subtitle1'>
                    Sorry about that, looks like this page doesn't exist.
                </Typography>
                
                <Typography variant='subtitle2'><Link to='/'>Back to the homepage</Link></Typography>
            </div>
        </main>
    )
}
