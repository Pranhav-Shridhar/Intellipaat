// Is there a way to avoid the requirement of binding when using React?

// Yes, there are two main ways you can use to avoid the need for binding. They are as follows:

// Defining the Event Handler as an Inline Arrow function:

class SubmitButton extends React.Component {

constructor(props) {

super(props);

this.state = {

isFormSubmitted: false

};

}

render() {

return (

<button onClick={() => {

this.setState({ isFormSubmitted: true });

}}>Submit</button>

)

}

}

//Using a function component along with Hooks:

// const SubmitButton = () => {

// const [isFormSubmitted, setIsFormSubmitted] = useState(false);

// return (

// <button onClick={() => {

// setIsFormSubmitted(true);

// }}>Submit</button>

// )
// };


// Also, the Event Handler can be defined as an Arrow function, which is eventually assigned to a Class Field to obtain similar results