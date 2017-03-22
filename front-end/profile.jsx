import React from 'react';
import $ from 'jquery';
import browserHistory from 'react-router';

var Profile = React.createClass({
	getInitialState: function(){
		return {profile: null, PeopleId: this.props.params.id, name: '', favoriteCity: ''}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/people/' + this.props.params.id,
			method: 'GET'
		})
		.done((profile) => {
			console.log(profile)
			this.setState({profile: profile, name: profile.name, favoriteCity: profile.favoriteCity})
		})
	},
	modifyCity: function(){
		$.ajax({
			url: '/api/people/' + this.props.params.id,
			method: 'PUT'
		})
		.done((profile) => {
			console.log('updated profile', profile)
			this.setState({profile: profile})
			browserHistory.push('/people/' + this.props.params.id)
		})
	},

	deleteProfile: function (){
		$.ajax({
			url: '/api/people/' + this.props.params.id,
			method: 'DELETE'
		})
		console.log('deleted')
		browserHistory.push('/people')
	},

	render: function(){
		return (
			<div>
				<h3>Profile Page</h3>
				<h1>{this.state.name}</h1>
				<h1>{this.state.favoriteCity}</h1>
				<button onClick={this.modifyCity}>Brooklynify</button>
				<button onClick={this.deleteProfile}>Delete</button>
			</div>
		)
	}
})

export default Profile;


