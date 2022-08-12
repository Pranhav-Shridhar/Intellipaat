// What are refs in React?

// ‘Refs’ is short for references in React. Refs are used to store a reference to a single React element or a React component. This is later returned using the render function.

// They are mainly used in the following scenarios:

// To initiate imperative animations
// To join third-party DOM libraries
// To manage focus and apply media playback

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    render() {
      return <div ref={this.myRef} />;
    }
  }