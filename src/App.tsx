import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { useHistory } from 'react-router'
import './App.css';
import Main from './Main';
import Candidate from './Candidate'
import Login from './Login'
import SignUp from './SignUp'
import UserActions from './UserActions'
import { fakeAuth } from './FakeAuth'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/candidate/:id' component={Candidate}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;