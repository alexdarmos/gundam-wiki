import React, { useState } from 'react';
import { data } from '../../../static-data';
import GundamContext from './GundamContext';

const GundamState = props => {
	const [activeGundam, setActiveGundam] = useState(data[0]);

	const getActiveGundam = gundam => {
		setActiveGundam(gundam);
	};

	return (
		<GundamContext.Provider
			value={{
				gundams: data,
				getActiveGundam,
				activeGundam: activeGundam
			}}
		>
			{props.children}
		</GundamContext.Provider>
	);
};

export default GundamState;
