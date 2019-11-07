import React,{Component,createElement} from 'react'
import {render} from 'react-dom'
import * as serviceWorker from './serviceWorker';
window.React = React


const style1 = {
  color: "yellow",
  backgroundColor:"red"
}
const x1 = createElement('h1', {className: 'header',style: style1}, 'Mohammad ')
render( x1 ,document.querySelector("#root") )



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
