import React, { useContext } from 'react';
import GundamContext from '../context/gundam/GundamContext';
//enables scroll to anchor tag for back button
import { HashLink as Link } from 'react-router-hash-link';

const GundamDetailsPage = () => {
	const gundamContext = useContext(GundamContext);
	const { activeGundam } = gundamContext;

	console.log(activeGundam);

	return (
		<div>
			<p>{activeGundam.name}</p>
			<p>{activeGundam.shortDescription}</p>
			<Link to={`/#gundam-item-${activeGundam.id}`} className="home-btn">
				Back
			</Link>
		</div>
	);
};

export default GundamDetailsPage;
