import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import Users from './routes/UserList';
import UsersDetails from './routes/UserDetails';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/users" component={Users}/>
      <Route path="/details/:id" component={UsersDetails}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

