import React from 'react';
import '../../assets/css/Drawer.css';

const Drawer = ({ drawer }) => {
	return (
		<div className={drawer ? 'drawer-container active' : 'drawer-container'}>
			<div className="sign-in-container">
				<p>Sign In</p>
				<input placeholder="username" />
				<input placeholder="password" />
			</div>
		</div>
	);
};

export default Drawer;
