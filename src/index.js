import React,{Component,createElement} from 'react'
import {render} from 'react-dom'
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'
import {App} from './components/app'
import {Err} from './components/err'
import * as serviceWorker from './serviceWorker'
import X0 from './components/signup'
import X1 from './components/signin'
import {X2} from './components/material-table'
import X3 from './components/navbutton'
window.React = React

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/about" component={App}/>
      <Route exact path="/add" component={App}/>
      <Route exact path="/table" component={App}/>
      <Route exact path="/table/:x" component={App}/>
      <Route exact path="/signup" component={X0}/>
      <Route exact path="/signin" component={X1}/>
      <Route exact path="/material-table" component={X2}/>
      <Route exact path="/navbutton" component={X3}/>
      <Route component={Err}/>
    </Switch>
  </BrowserRouter>
  ,document.querySelector("#root") )



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
