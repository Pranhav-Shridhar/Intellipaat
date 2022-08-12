// What are the predefined prop types present in React?

// There are five main predefined prop types in React. They are as follows:

// PropTypes.bool
// PropTypes.func
// PropTypes.node
// PropTypes.number
// PropTypes.string
// The propTypes can be defined for the user component as shown below:

import PropTypes from 'prop-types';

class User extends React.Component {

render() {

return (
    <div>

<h1>Welcome, {this.props.name}</h1>

<h2>Age, {this.props.age}</h2>
</div>
);

}

}

User.propTypes = {

name: PropTypes.string.isRequired,

age: PropTypes.number.isRequired

};