// Can AJAX be used with React?

// Yes, any AJAX library, such as Axios and jQuery AJAX, can be used with React easily. One important thing is to maintain the states of the components, and here too, the props are passed from the parents to the child components.

// Child components still cannot send back props to parents, and this factor greatly increases rendering efficiency when dynamic data is considered.

fetch('path-to-the-resource-to-be-fetched')
.then((response) => {

	// Code for handling the response
})
.catch((error) => {

	// Code for handling the error
});

axios.get('url')
.then((response) => {

	// Code for handling the response
})
.catch((error) => {

	// Code for handling the error
})
