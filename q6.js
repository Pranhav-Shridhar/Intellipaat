// Can browsers read a JSX file?

// No, browsers cannot read JSX files directly. It can only read the objects provided by JavaScript. Now, to make a browser read a JSX file, it has to be transformed to a JavaScript object using JSX transformers, and only then it can be fed into the browser for further use in the pipeline. It is converted using Babel.

// Before conversion:

// import React from 'react';
// import ReactDOM from 'react-dom';

// const ele = (
// 	<div className = 'page'
// 	style = {
// 		{ textAlign: 'center' }
// 	}>
// 	<h1 id = 'head'> Never Stop Learning!!! </h1>
// 	<h2 style = {
// 		{ color: 'green' }
// 	}> Because life never stops teaching </h2>
// 	<p> From GeeksforGeeks </p>

// 	</div>
// );

// ReactDOM.render(ele, document.getElementById('root'));

// After conversion:

import React from 'react';
import ReactDOM from 'react-dom';
	
const ele = React.createElement("div", {
		className: 'page',
		style: { textAlign: 'center' }
	},
	React.createElement("h1", { id: 'head' }, "Never Stop Learning!!!"),
	React.createElement("h2", { style: { color: 'green' } },
						"Because life never stops teaching"),
	React.createElement('p', null, "From GeeksforGeeks")
);

ReactDOM.render(ele, document.getElementById('root'));

