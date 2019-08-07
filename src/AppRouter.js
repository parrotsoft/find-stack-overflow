import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Navbar />

				<Route path="/" exact component={Home} />
				<Route path="/contacto/" component={Contact} />
			</Router>
		);
	}
}
