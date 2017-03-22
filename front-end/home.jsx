import React from 'react';
import {Link, browserHistory} from 'react-router';

var Home = React.createClass({
	seeProfiles: function(){
		browserHistory.push('/people')
	},
	render: function(){
		return(
			<div className="homeDiv">
				<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/500px-Spotify_logo_with_text.svg.png' />

				<h3>Spotify Fellowship Code Challenge</h3>
				<details>
					<summary>Salina Fu</summary>
					<p>Contact: sfu.concepts@gmail.com</p>
					<a href='http://linkedin.com/in/salinafu' target='_blank'><p>LinkedIn</p>
					</a>
				</details>

				<br /><br />

				<button className="btn" onClick={this.seeProfiles}> Profiles</button>

			</div>
		)
	}
})

export default Home;
