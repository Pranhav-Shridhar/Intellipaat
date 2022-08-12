// Can you conditionally add attributes to components in React?

// You can conditionally add attributes by the following 4 methods:

// 1. if Statement 

// if(user.role === 'Student') {
//     disabled = true;
// }

// 2. Ternary operator

// return <input type="text" name="address" disabled={ user.role === 'Student' ? true : false }/>;


// 3. && operator

// return <input type="text" name="address" disabled={ user.role === 'Student' && true }/>;


// 4. Spread operator

// return <input { ...attributes }/>;
