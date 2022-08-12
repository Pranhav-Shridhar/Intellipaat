// What is the use of an arrow function in React?

// An arrow function is used to write an expression in React. It allows users to manually bind components easily. The functionality of arrow functions can be very useful when you are working with higher-order functions particularly.

// Consider the following example:

//The usual way

render() {
return(
<MyInput onChange={this.handleChange.bind(this) } />
);
}
//Making use of the arrow function
render() {
return(
<MyInput onChange={ (e) => this.handleOnChange(e) } />
);
}