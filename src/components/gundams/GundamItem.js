import React, { useEffect, useRef } from 'react';
import '../../assets/css/GundamItem.css';
const GundamItem = ({ gundam, retrieveGundam }) => {
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
				retrieveGundam(gundam);
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
	}, [retrieveGundam, gundam]);

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

export default GundamItem;
