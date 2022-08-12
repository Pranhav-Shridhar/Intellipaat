// Why is props passed to the super() function in React?

// Props gets passed onto the super() function if a user wishes to access this.props in the constructor.

// Consider the following example:

class MyComponent extends React.Component {

constructor(props) {

super(props)

console.log(this.props)

// -> { icon: 'home', … }

}

}