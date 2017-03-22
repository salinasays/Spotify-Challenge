import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Directory from './directory.jsx';
import Home from './home.jsx';
import Profile from './profile.jsx';
import './main.css'

class App extends React.Component {
	render() {
		return <div>{this.props.children}</div>
	}
}

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path = '/' component = {App}>
			<IndexRoute component={Home}/>
			<Route path='/people' component={Directory} />
			<Route path='/people/:id' component={Profile} />
		</Route>
	</Router>, 
	document.getElementById('root'));
