import React, { useState, useEffect } from 'react';
import GundamItem from './GundamItem';
import '../../assets/css/GundamItem.css';

const Gundams = ({ gundams, retrieveActiveGundam }) => {
	function getGundamRef(gundam) {
		retrieveActiveGundam(gundam);
	}

	return (
		<div className="gundam-container">
			{gundams.map(gundam => (
				<GundamItem
					key={gundam.id}
					gundam={gundam}
					getGundamRef={getGundamRef}
				/>
			))}
		</div>
	);
};

export default Gundams;
