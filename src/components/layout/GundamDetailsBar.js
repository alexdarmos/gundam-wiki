import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/GundamDetailsBar.css';
import GundamContext from '../context/gundam/GundamContext';

const GundamDetailsBar = () => {
	const gundamContext = useContext(GundamContext);

	const { activeGundam } = gundamContext;

	const { fighting, weapons, speed, power, armor } = activeGundam.abilityLevels;
	return (
		<div className="gundam-detail-bar">
			<p>Fighting: {fighting}</p>
			<p>Weapons: {weapons}</p>
			<p>Speed: {speed}</p>
			<p>Power: {power}</p>
			<p>Armor: {armor}</p>
			<Link to={`/details/${activeGundam.name}`} className="details-button">
				Details
			</Link>
		</div>
	);
};

export default GundamDetailsBar;
