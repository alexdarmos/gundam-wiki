import React from 'react';
import '../../assets/css/GundamDetailsBar.css';

const GundamDetailsBar = ({ tempActive }) => {
	const { fighting, weapons, speed, power, armor } = tempActive.abilityLevels;
	console.log(tempActive);
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
