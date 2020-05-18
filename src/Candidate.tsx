import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Candidate.css'

function Candidate(props: any){

	let candidate = props.location.state
	let date = new Date(candidate.created_at)
	return(
		<div>
			<div className="Objects"><Link className="Backlink" to='/'>←Go Back</Link></div>
			<h1>{candidate.first_name} {candidate.last_name}</h1>
			<h2>Created at: {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}</h2>
			<h2>Credit Indicator: {candidate.credit_indicator}</h2>
		</div>
	);
}

export default Candidate;