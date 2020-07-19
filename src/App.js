import React, { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GundamPage from './components/pages/GundamPage';
import Nav from './components/layout/Nav';
import { data } from './static-data.js';
import GundamDetailsPage from './components/pages/GundamDetailsPage';
import GundamState from './components/context/gundam/GundamState';

function App() {
	return (
		<GundamState>
			<Router>
				<div className="App">
					<Nav />
					<Switch>
						<Route
							exact
							path="/"
							render={() => <GundamPage gundams={data} />}
						/>
						<Route
							exact
							path="/details/:gundam"
							component={GundamDetailsPage}
						/>
						{/* <Route exact path="/details" component={GundamDetailsPage} /> */}
						{/* <GundamPage gundams={data} />
			<GundamDetailsPage /> */}
					</Switch>
				</div>
			</Router>
		</GundamState>
	);
}

export default App;
