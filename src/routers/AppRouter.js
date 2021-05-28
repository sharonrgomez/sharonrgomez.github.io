import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import {SideDrawer} from '../components/SideDrawer'
import {AboutPage} from '../components/AboutPage'
import {PortfolioPage} from '../components/PortfolioPage'
import {ContactPage} from '../components/ContactPage'
import {NotFoundPage} from '../components/NotFoundPage'

export const AppRouter = () => (
    <HashRouter basename='/'>
        <React.Fragment>
            <SideDrawer />
            
            <Switch>
                <Route path='/' component={AboutPage} exact={true} />
                <Route path='/portfolio' component={PortfolioPage} />
                <Route path='/contact' component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </React.Fragment>
    </HashRouter>
)