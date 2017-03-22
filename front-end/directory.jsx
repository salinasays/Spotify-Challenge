import React from 'react';
import $ from 'jquery'
import AddPerson from './addPerson.jsx';
import Profile from './profile.jsx'
import {Link, browserHistory} from 'react-router';

var Directory = React.createClass({
	getInitialState: function(){
		return {profiles: null, favoriteCity: ''}
	},

	componentDidMount: function(){
		$.ajax({
			url: '/api/people',
			method: 'GET'
		})
		.done((data) => {
			console.log(data)
			this.setState({profiles: data})
		})
	},

	render: function(){
		let profiles = []
		if (this.state.profiles) {
			return (
				<div>
					<div className="section">
					<h2>Full List of Profiles</h2>
					<ol>
						{this.state.profiles.map((val) => {
							return (
								<Link to={'/people/' + val.id}><div key={val.id}>
									<b>Name:</b> {val.name}
									<br />
									<b>Favorite City:</b> {val.favoriteCity}
									<br /><br />

								</div></Link>
							)
						})}
					</ol>
					</div>

					<div className="section">
						<AddPerson />
					</div>
				</div>
			)
		

		} else {
			return (
				<div>Loading...</div>
			)
		}
	}	
})

export default Directory;