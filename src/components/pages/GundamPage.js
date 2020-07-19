import React from 'react';
import Gundams from '../gundams/Gundams';
import GundamDetailsBar from '../layout/GundamDetailsBar';

const GundamPage = ({ gundams }) => {
	return (
		<div>
			<Gundams gundams={gundams} />
			<GundamDetailsBar />
		</div>
	);
};

export default GundamPage;
