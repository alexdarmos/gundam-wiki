import React, { useEffect } from 'react';
import Gundams from '../gundams/Gundams';
import GundamDetailsBar from '../layout/GundamDetailsBar';

const GundamPage = ({ gundams }) => {
	// let tempActive = gundams[0];

	function retrieveActive(activeGundam) {
		let tempActive = activeGundam;
		return tempActive;
	}

	return (
		<div>
			<Gundams gundams={gundams} retrieveActive={retrieveActive} />
			<GundamDetailsBar tempActive={retrieveActive} />
		</div>
	);
};

export default GundamPage;
