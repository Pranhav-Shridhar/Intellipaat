// How are events created in React?

// Events can be created very easily in React as shown here:

class Display extends React.Component({

show(evt) {
// Code inside
},

render() {

// Render the div with an onClick prop (value is a function)

return (

<div onClick={this.show}>Click Here</div>

);
}
})