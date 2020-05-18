import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import './App.css';
import { fakeAuth } from './FakeAuth'
import './UserActions.css'


function UserActions() {
	let history = useHistory()
	function loginClick(){
		history.push('/login')
	}

	function signOut(){
		fakeAuth.signout(() => {
			history.push('/login')
		})
	}

	function signUp(){
		history.push('/signup')
	}

	return(
		<div className="UserActions">
	        <header className="Header">
	        	Hatch Coding Assignment
	        </header>
			{!fakeAuth.isAuthenticated && <button className="UserActionButton" type="button" onClick={signUp}>Sign Up</button>}
			{!fakeAuth.isAuthenticated && <button className="UserActionButton" type="button" onClick={loginClick}>Login</button>}
			{fakeAuth.isAuthenticated && fakeAuth.email && <div className="Email">{fakeAuth.email}</div>}
        	{fakeAuth.isAuthenticated && <button className="UserActionButton" type="button" onClick={signOut}>Sign Out</button>}
		</div>
	)
}

export default UserActions