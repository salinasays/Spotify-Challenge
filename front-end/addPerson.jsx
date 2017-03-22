import React from 'react';
import $ from 'jquery';
import browserHistory from 'react-router';

var AddPerson = React.createClass({
	getInitialState: function(){
		return {name: '', favoriteCity: ''}
	},
	addPerson: function(e){
		$.ajax({
			url: '/api/people',
			method: 'POST',
			data: this.state
		})
		.done((data) => {
			console.log("Person Added.")
			browserHistory.push('/people')
		})
	},
	handleChange(input, e) {
		if(input === 'name'){
			this.setState({name: e.target.value})
		} else if (input === 'favoriteCity'){
			this.setState({favoriteCity: e.target.value})
		}
	},
	render: function(){
		return (
			<div>
				<div className='Create'> 
					<h2>Create A Profile</h2>
					<form onSubmit={this.addPerson}>

						<label>Name</label>
						<input type="text" onChange={this.handleChange.bind(this, "name")}  />

						<br /><br />

						<label>Favorite City</label>
						<input type="text" onChange={this.handleChange.bind(this, "favoriteCity")} />

						<br /><br />

						<input type="submit" className="btn" value="Add" />
					</form>
				</div>
			</div>
		)
	}
});

export default AddPerson;