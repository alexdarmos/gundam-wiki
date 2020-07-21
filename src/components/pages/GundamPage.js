import React from 'react';
import Gundams from '../gundams/Gundams';
import GundamDetailsBar from '../layout/GundamDetailsBar';

const GundamPage = () => {
	return (
		<div>
			<Gundams />
			<GundamDetailsBar />
		</div>
	);
};

export default GundamPage;
