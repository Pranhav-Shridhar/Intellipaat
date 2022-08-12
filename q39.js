// What is the difference between cloneElement and createElement in React?

// In React, cloneElement is primarily used to clone an element and pass it to new props directly. Whereas, createElement is the entity that JSX gets compiled into. This is also used to create elements in React.

//createElement

import React from 'react';
import "./styles.css";
const title = React.createElement('h1',
	{className:'title'}, 'GeeksforGeeks');
const App =()=>
React.createElement('div', {}, [
	React.createElement('button',{className:'btn'}, title),
	React.createElement('button', {className:'btn'}, title),
]);

export default App;


//cloneElement

//App.js

// import React from 'react';
// import Button from './Button';
// import './styles.css';
// const App = () => {
// 	return (
// 		<Parent>
// 			<Button />
// 			<br /><br />
// 			<Button />
// 		</Parent>
// 	)
// }

// const Parent = (props) => {
// 	let btn = 'GeeksforGeeks';
// 	return (
// 		<div>
// 			{React.Children.map(props.children,
// 				child => {
// 					return React.cloneElement(child,
// 						{ btn }, null);
// 					// third parameter is null
// 					// Because we are not adding
// 					// any children
// 				})}
// 		</div>
// 	)
// }

// export default App;

//Button.js

// import React from 'react';
// const Button=(props)=> {
// 	return (
// 		<button>
// 			{props.btn }
// 		</button>
// 	)
// }

// export default Button;

