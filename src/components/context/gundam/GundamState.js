import React, { createContext, useState } from 'react';
import { data } from '../../../static-data';
import GundamContext from './GundamContext';

const GundamState = props => {
	const [activeGundam, setActiveGundam] = useState(data[0]);
	const getActiveGundam = gundam => {
		// console.log(gundam);
		setActiveGundam(gundam);
	};

	return (
		<GundamContext.Provider
			value={{ getActiveGundam, activeGundam: activeGundam }}
		>
			{props.children}
		</GundamContext.Provider>
	);
};

export default GundamState;
