import React, { useEffect, useRef, useContext } from 'react';
import '../../assets/css/GundamItem.css';
import PropTypes from 'prop-types';
import GundamContext from '../context/gundam/GundamContext';
const GundamItem = ({ gundam }) => {
	const gundamContext = useContext(GundamContext);

	const { getActiveGundam } = gundamContext;

	const banner = {
		backgroundImage: `url(${gundam.banner})`,
		height: '100vh',
		width: '100vw',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	};

	const gundamItem = useRef();

	useEffect(() => {
		function listener(e) {
			let gundamPosition = gundamItem.current.offsetTop;
			let screenPosition = e.target.scrollTop;

			if (screenPosition === gundamPosition) {
				getActiveGundam(gundam);
			}
		}

		document
			.querySelector('.gundam-container')
			.addEventListener('scroll', listener);
		return () => {
			document
				.querySelector('.gundam-container')
				.removeEventListener('scroll', listener);
		};
	}, [gundam, getActiveGundam]);

	return (
		<div
			ref={gundamItem}
			style={banner}
			id={`gundam-item-${gundam.id}`}
			className="gundam-item"
		>
			<div className="basic-info">
				<h1 className="name">{gundam.name}</h1>
				<h2>{gundam.classification}</h2>
				<p>{gundam.shortDescription}</p>
			</div>
		</div>
	);
};

GundamItem.propTypes = {
	gundam: PropTypes.object.isRequired
};

export default GundamItem;
