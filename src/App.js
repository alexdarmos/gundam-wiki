import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GundamPage from './components/pages/GundamPage';
import Nav from './components/layout/Nav';
import GundamDetailsPage from './components/pages/GundamDetailsPage';
import GundamState from './components/context/gundam/GundamState';

function App() {
	return (
		<GundamState>
			<Router>
				<div className="App">
					<Nav />
					<Switch>
						<Route exact path="/" component={GundamPage} />
						<Route
							exact
							path="/details/:gundam"
							component={GundamDetailsPage}
						/>
					</Switch>
				</div>
			</Router>
		</GundamState>
	);
}

export default App;
