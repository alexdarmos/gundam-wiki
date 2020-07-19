import React, { useContext } from 'react';
import GundamContext from '../context/gundam/GundamContext';
import GundamItem from './GundamItem';
import '../../assets/css/GundamItem.css';

const Gundams = () => {
	const gundamContext = useContext(GundamContext);
	const { gundams } = gundamContext;
	return (
		<div className="gundam-container">
			{gundams.map(gundam => (
				<GundamItem key={gundam.id} gundam={gundam} />
			))}
		</div>
	);
};

export default Gundams;
