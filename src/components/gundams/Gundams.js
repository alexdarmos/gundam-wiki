import React, { useState, useEffect } from 'react';
import GundamItem from './GundamItem';
import '../../assets/css/GundamItem.css';

const Gundams = ({ gundams }) => {
	return (
		<div className="gundam-container">
			{gundams.map(gundam => (
				<GundamItem key={gundam.id} gundam={gundam} />
			))}
		</div>
	);
};

export default Gundams;
