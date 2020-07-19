import React, { useContext } from 'react';
import GundamContext from '../context/gundam/GundamContext';

const GundamDetailsPage = ({ match }) => {
	const gundamContext = useContext(GundamContext);
	const { activeGundam } = gundamContext;

	console.log(activeGundam);

	// console.log(match.params.gundam);
	return (
		<div>
			<p>{activeGundam.name}</p>
			<p>{activeGundam.shortDescription}</p>
		</div>
	);
};

export default GundamDetailsPage;
