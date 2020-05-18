import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { Redirect, useHistory } from 'react-router-dom';
import './Main.css'
import { fakeAuth } from './FakeAuth'
import UserActions from './UserActions'
import './Login.css'

function Login() {

	const {register, handleSubmit, errors} = useForm();
	const history = useHistory()
	const [error, changeError] = useState(false)

	function onSubmit(data: any){
		fakeAuth.authenticate(data.email, data.password, (authenticated: boolean) => {
			if(authenticated){
				history.push('/')
			} else {
				changeError(true)
			}
		});
	}

	return (	
		<div>
			<UserActions/>
			<div className="LoginHeader">Login</div>
			<form onSubmit={handleSubmit(onSubmit)}  className="Items">
				<label>Email</label>
				<input type="email" name="email" ref={register({required: true, maxLength: 100})}></input>
				<label>Password</label>
				<input type="password" name="password" ref={register({required: true, maxLength: 30})}></input>
				{error && <div className="Error">You have entered the wrong email or password.</div>}
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default Login