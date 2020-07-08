import React, { createContext } from 'react';

const GundamContext = React.createContext();

const GundamState = ({ setActiveGundam }) => {
	return (
		<GundamContext.Provider
			value={{ onSetActiveGundam: setActiveGundam }}
		></GundamContext.Provider>
	);
};

export default GundamState;
