import React, { useEffect, useContext } from 'react';
import './App.css';
import GundamPage from './components/pages/GundamPage';
import Nav from './components/layout/Nav';
import { data } from './static-data.js';

function App() {
	return (
		<div className="App">
			<Nav />
			<GundamPage gundams={data} />
		</div>
	);
}

export default App;
