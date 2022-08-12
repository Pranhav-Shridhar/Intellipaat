// What is the StrictMode component used in React?

// StrictMode is a React Developer Tool primarily used for highlighting possible problems in a web application. It activates additional deprecation checks and warnings for its child components. One of the reasons for its popularity is the fact that it provides visual feedback (warning/error messages) whenever the React guidelines and recommended practices are not followed. Just like the React Fragment, the React StrictMode Component does not render any visible UI. 

import React from 'react';

function StictModeDemo() {
return (
	<div>
	<Component1 />
	<React.StrictMode>
		<React.Fragment>
		<Component2 />
		<Component3 />
		</React.Fragment>
	</React.StrictMode>
	<Component4 />
	</div>
);
}
