import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Index from '../views/Index'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Home from '../views/Home'
import Lyrics from '../components/Lyrics'

const Routes = (props) => {
    return <>
    <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/home/lyrics/:id" component={Lyrics}></Route>
    </Switch>        
    </>
}

export default Routes