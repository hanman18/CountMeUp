var React = require('react');

var Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	getDefaultProps() {
		return {
			status: 'disconnected'
		}
	},

	render() {
		return (
			<header className="row">
				
					<h1>Count Me Up</h1>
					
		
			</header>
		);
	}

});

module.exports = Header;