// What is the use of the second argument that is passed to setState? Is it optional?

// When setState is finished, a callback function is invoked, and the components get re-rendered in React.

// Yes, it is an optional argument. Since setState is asynchronous, it takes in another callback function. However, in programming practice, it is always good to use another life cycle method instead of this.

import React, { Component } from 'react';

class App extends Component {
constructor(props) {
	super(props);
	this.state = {
	name: "GFG",
	};
}
	
updateName = (value) => {
	console.log("Previous name: "+this.state.name)
	this.setState({ name: value});
	console.log("Current name: "+this.state.name);
};


render() {
	const {name} = this.state;
	return (
	<div>
		<p>Welcome To GFG</p>

		<input
		type="text"
		value={name}
		onChange={e => this.updateName(e.target.value)}
		/>
	</div>
	);
}
}

export default App;
