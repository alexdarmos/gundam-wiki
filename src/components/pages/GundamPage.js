import React, { useEffect, useState } from 'react';
import Gundams from '../gundams/Gundams';
import GundamDetailsBar from '../layout/GundamDetailsBar';

const GundamPage = ({ gundams }) => {
	const [activeGundam, setActiveGundam] = useState(gundams[0]);

	const retrieveActiveGundam = gundam => {
		setActiveGundam(gundam);
	};

	return (
		<div>
			<Gundams gundams={gundams} retrieveActiveGundam={retrieveActiveGundam} />
			<GundamDetailsBar activeGundam={activeGundam} />
		</div>
	);
};

export default GundamPage;
