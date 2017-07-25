var React = require('react');
var Display = require('./Display');
var Link = require('react-router').Link;


var Ask = React.createClass({

	getInitialState() {
		return {
			choices: [],
			answer: undefined,
			count: 0
		};
	},

	componentWillMount() {
		this.setUpChoices();
	},

	componentWillReceiveProps() {
		this.setUpChoices();
	},

	setUpChoices() {
		var choices = Object.keys(this.props.question);
		choices.shift();
		this.setState({ 
			choices: choices,
			answer: sessionStorage.answer
		});
	},

	select(choice) {
		this.setState({ answer: choice });
		if(this.state.count == 3){
			this.setState({count: 5});
		}
		else{
			this.setState({count: this.state.count + 1});
		}
		sessionStorage.answer = choice;
		this.props.emit('answer', {
			question: this.props.question,
			choice: choice
		});
	},

	addChoiceButton(choice, i) {

		var buttonTypes = ['primary', 'success', 'warning', 'danger'];

		return (
			<button key={i} 
			        className={"col-xs-12 col-sm-6 btn btn-" + buttonTypes[i]}
			        onClick={this.select.bind(null, choice)}>
				{choice}: {this.props.question[choice]}
			</button>
		);
	},

	onSubmit(){
		this.setState({count: 5});
	},

	render() {
		return (
			<div id="currentQuestion">

				<Display if={this.state.count == 3}>
					<h3>Thank you for Submitting your Answers!</h3>
					<Link to="/board"> View Live Results Here! </Link>

				</Display>

				<Display if={this.state.count < 3}>
					<h4>Choose the best Game of Thrones Character. You can select up to 3 candidates</h4>
					<div className="row">
						{this.state.choices.map(this.addChoiceButton)}
						<button className="col-xs-12 col-sm-6 btn btn-" type="submit" onClick={this.onSubmit}>Submit</button>
					</div>
				</Display>

			</div>
		);
	}

});

module.exports = Ask;