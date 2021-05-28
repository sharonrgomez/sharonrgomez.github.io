import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CssBaseline from '@material-ui/core/CssBaseline'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import {MuiThemeProvider} from '@material-ui/core/styles'

import {portfolioStyles} from '../styles/components/PortfolioPage'
import {bgTheme} from '../styles/base'

export const Project = ({
    desc,
    demoLink,
    hasDemo = true,
    mainIcon,
    mainIconDesc,
    secondaryIcon,
    secondaryIconDesc,
    srcLink,
    thirdIcon, 
    thirdIconDesc,
    title,
}) => {
    const classes = portfolioStyles()

    return (
        <>
            <MuiThemeProvider theme={bgTheme}>
                <CssBaseline />
                <CardContent classes={{ root: classes.paddingBottom }} className={classes.cardContent}>
                    <Typography component={'span'}>
                        <Box fontWeight={500}>{title}</Box>
                    </Typography>

                    <Typography variant='caption'>
                        {desc}
                    </Typography>

                    <CardActions classes={{ root: classes.icons }}>
                        <div>
                            <img className={classes.image} src={mainIcon} title={mainIconDesc} />
                            {
                                secondaryIcon &&
                                <img className={classes.image} src={secondaryIcon} title={secondaryIconDesc} />
                            }
                            {
                                thirdIcon &&
                                <img className={classes.image} src={thirdIcon} title={thirdIconDesc} />

                            }

                        </div>
                        <div>
                            <Button href={srcLink} target='_blank' size='large' color='primary'>
                                <Box fontWeight={400}>Github</Box>
                            </Button>
                            {
                                hasDemo &&
                                <Button href={demoLink} target='_blank' size='large' color='primary'>
                                    <Box fontWeight={400}>Demo</Box>
                                </Button>
                            }
                        </div>
                    </CardActions>
                </CardContent>
            </MuiThemeProvider>
        </>
    )
}