// What is the difference between using getInitialState and constructors in React?

// When using ES6, users must initialize the state in the constructor and the getInitialState method is defined. This is done using React.createClass as shown in the below example:

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = { /* initial state */ };

}

}

// This above piece of code is equivalent to the following:

var MyComponent = React.createClass({

getInitialState() {

return { /* initial state */ };

},

});