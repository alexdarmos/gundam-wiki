import React from 'react';
import '../../assets/css/GundamDetailsBar.css';

const GundamDetailsBar = ({ activeGundam }) => {
	const { fighting, weapons, speed, power, armor } = activeGundam.abilityLevels;
	return (
		<div className="gundam-detail-bar">
			<p>Fighting: {fighting}</p>
			<p>Weapons: {weapons}</p>
			<p>Speed: {speed}</p>
			<p>Power: {power}</p>
			<p>Armor: {armor}</p>
		</div>
	);
};

export default GundamDetailsBar;
