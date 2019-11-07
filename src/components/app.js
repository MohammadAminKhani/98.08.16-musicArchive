import React, { Component } from 'react'
import { BrowserRouter,Route,Link} from 'react-router-dom'
import {topics} from './value'

const Resource = ({ match }) => {

  const topic = topics.find(
    ({ id }) => id === match.params.topicId
  ).resources.find(
      ({ id }) => id === match.params.subId
    )

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info.</a>
    </div>
  )
}

const Topic = ({ match }) => {
  const topic = topics.find(
    ({ id }) => id === match.params.topicId
  )

  return (
    <BrowserRouter>
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
      <ul>{topic.resources.map(
        (sub) => <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
                 </li>
        )}
        </ul><hr />
      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
    </BrowserRouter>
  )
}

const Topics = ({ match }) =>
<BrowserRouter>
<div><h1>Topics</h1>
<ul>{topics.map(
({ name, id }) =>
<li key={id}>
<Link to={`${match.url}/${id}`}>
{name}
</Link></li>
)}
</ul><hr />
<Route path={`${match.path}/:topicId`} component={Topic}/>
</div>
</BrowserRouter>

const Home = () => <h1>Home</h1>


export class App extends Component {
  render() {return (
      <BrowserRouter>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul><hr />
          <Route exact path='/' component={Home} />
          <Route exact path='/topics' component={Topics} />
        </div>
      </BrowserRouter>
    )
  }
}
