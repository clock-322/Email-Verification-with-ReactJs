import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandPage from './components/homePage'
import LoginPage from './components/verifyEmail'
import Err from './components/error'

export default class Routing extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={LoginPage}/>
                    <Route exact path='/landPage' component={LandPage}/>
                    <Route Component={Err}/> 
                </Switch>
            </Router>
        )
    }
}