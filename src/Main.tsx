import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import UserActions from './UserActions'
import './Main.css'
import { fakeAuth } from './FakeAuth'

function Main() {
	const [ candidates, changeCandidates ] = useState<any[]>([])

	const [ sort, changeSort ] = useState<any>({ name: '', ascending: false});

	const [ redirectCandidate, changeRedirectCandidate ] = useState<any>({})

	useEffect(() => {
		fetch('http://private-041255-sakura3.apiary-mock.com/applicants')
		.then(response => response.json())
		.then(data => {
			changeCandidates(data);
		})
	}, [])

	useEffect(() => {
		if(!sort.name){
			return
		}
		let newCandidates = [...candidates]
		newCandidates.sort((a, b) => {
			if(sort.name === 'first_name'){
				if(sort.ascending){
					return Number(a.first_name < b.first_name) - .5
				} else {
					return Number(a.first_name > b.first_name) - .5
				}
			} else if (sort.name === 'last_name'){
				if(sort.ascending){
					return Number(a.last_name < b.last_name) - .5
				} else {
					return Number(a.last_name > b.last_name) - .5
				}
			} else if (sort.name === 'created_at'){
				let aDate = new Date(a.created_at)
				let bDate = new Date(b.created_at)
				if(sort.ascending){
					return aDate.getTime() - bDate.getTime()
				} else {
					return bDate.getTime() - aDate.getTime()
				}
			} else {
				if(sort.ascending){
					return a.credit_indicator - b.credit_indicator
				} else {
					return b.credit_indicator - a.credit_indicator
				}
			}
		})
		changeCandidates(newCandidates)
	}, [sort])

	useEffect(()=> {}, [fakeAuth])

	function changeDifferentSort(e: any){
		let newSort = e.target.id
		if(newSort === sort.name){
			changeSort({ name: sort.name, ascending: !sort.ascending})
		} else {
			changeSort({ name: newSort, ascending: false})
		}
	}

	function redirectToCandidate(cand: any) {
		changeRedirectCandidate(cand)
	}

	let shownCandidates = candidates.map(candidate => {
		let date = new Date(candidate.created_at);
		return(
			<tr onClick={() => { redirectToCandidate(candidate)}} className="Body">
				<td>{candidate.first_name}</td>
				<td>{candidate.last_name}</td>
				<td>{date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}</td>
				<td>{candidate.credit_indicator}</td>
			</tr>
		)
	})

	let sortArrow = sort.ascending ? '↑' : '↓'

	if(!fakeAuth.isAuthenticated){
		return (
			<Redirect to={{pathname: "/login"}} />
		)
	}
	return (
		<div>
			<UserActions/>
			<h2 className="Main">
				{redirectCandidate.id && <Redirect to={{pathname: "/candidate/" + redirectCandidate.id, state: redirectCandidate}} />}
				<table className="Table">
					<tbody>
						<tr className="TableHeader">
							<td style={{width: "20%"}} id="first_name" onClick={changeDifferentSort}>{(sort.name === 'first_name') && sortArrow}First Name</td>
							<td style={{width: "20%"}} id="last_name" onClick={changeDifferentSort}>{(sort.name === 'last_name') && sortArrow}Last Name</td>
							<td style={{width: "35%"}} id="created_at" onClick={changeDifferentSort}>{(sort.name === 'created_at') && sortArrow}Created At</td>
							<td style={{width: "25%"}} id="credit_indicator" onClick={changeDifferentSort}>{(sort.name === 'credit_indicator') && sortArrow}Credit Indicator</td>
						</tr>
						{shownCandidates}
					</tbody>
				</table>
			</h2>
		</div>
	)
}

export default Main;