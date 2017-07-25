var React = require('react');
var Display = require('./parts/Display');
var JoinSpeaker = require('./parts/JoinSpeaker');
var Attendance = require('./parts/Attendance');
var Questions = require('./parts/Questions');
var Link = require('react-router').Link;


var Speaker = React.createClass({
	render() {
		return (
			<div>
				<Display if={this.props.status === 'connected'}>

					<Display if={this.props.member.name && this.props.member.type === 'speaker'}>
						<Questions questions={this.props.questions} emit={this.props.emit} />
						<Link to="/board"> View Live Results Here! </Link>
					</Display>

					<Display if={!this.props.member.name}>
						<h2>Start the the Polling Process</h2>
						<JoinSpeaker emit={this.props.emit} />
					</Display>

				</Display>
			</div>
		);
	}
});

module.exports = Speaker;