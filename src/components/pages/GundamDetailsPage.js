import React, { useContext } from 'react';
import GundamContext from '../context/gundam/GundamContext';
import '../../assets/css/GundamDetailsPage.css';
//enables scroll to anchor tag for back button
import { HashLink as Link } from 'react-router-hash-link';

const GundamDetailsPage = () => {
	const gundamContext = useContext(GundamContext);
	const { activeGundam } = gundamContext;

	return (
		<div className="gundam-details-page">
			<Link to={`/#gundam-item-${activeGundam.id}`} className="home-btn">
				Back
			</Link>
			<div className="row-1">
				<div className="col-left">
					<div className="gundam-title">
						<h2>{activeGundam.name}</h2>
						<h2>{activeGundam.classification}</h2>
					</div>
					<div className="description">
						<p>{activeGundam.shortDescription}</p>
					</div>
				</div>
				<div className="col-right">
					<div className="gundam-image"></div>
					<p className="gundam-height">{activeGundam.height}</p>
					<p className="gundam-weight">{activeGundam.weight}</p>
				</div>
			</div>
			<div className="row-2">
				<div className="gundam-ability-container">
					<div className="gundam-ability">
						<p>{activeGundam.abilityLevels.fighting}</p>
					</div>
					<div className="gundam-ability">
						<p>{activeGundam.abilityLevels.weapons}</p>
					</div>
					<div className="gundam-ability">
						<p>{activeGundam.abilityLevels.speed}</p>
					</div>
					<div className="gundam-ability">
						<p>{activeGundam.abilityLevels.power}</p>
					</div>
					<div className="gundam-ability">
						<p>{activeGundam.abilityLevels.armor}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GundamDetailsPage;
