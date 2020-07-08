import React, { useState } from 'react';
import Drawer from './Drawer';
import '../../assets/css/Nav.css';

const Nav = () => {
	const [drawer, setDrawer] = useState(false);

	function toggleDrawer() {
		setDrawer(!drawer);
	}

	return (
		<div className="nav-container">
			<i onClick={toggleDrawer} className="fa">
				&#xf0c9;
			</i>
			<h1 className="title">Gundam Wiki</h1>
			<div className="invisible-flex-item" />
			<Drawer drawer={drawer} />
		</div>
	);
};

export default Nav;
