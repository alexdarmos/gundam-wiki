import React, { useState, useEffect } from 'react';
import GundamItem from './GundamItem';
import '../../assets/css/GundamItem.css';

const Gundams = ({ gundams, retrieveActive }) => {
	const [activeGundam, setActiveGundam] = useState(gundams[0]);

	useEffect(() => {
		retrieveActive(activeGundam);
	}, [retrieveActive]);

	function retrieveGundam(gundam) {
		setActiveGundam(gundam);
	}

	return (
		<div className="gundam-container">
			{gundams.map(gundam => (
				<GundamItem
					key={gundam.id}
					gundam={gundam}
					retrieveGundam={retrieveGundam}
				/>
			))}
		</div>
	);
};

export default Gundams;
