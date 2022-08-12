// What are higher-order components (HOCs) used for?

// HOCs are used for a variety of tasks such as:

// Manipulation of props
// State manipulation and abstraction
// Render highjacking
// Code reusing
// Bootstrap abstraction

// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
    // ...and returns another component...
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          data: selectData(DataSource, props)
        };
      }
  
      componentDidMount() {
        // ... that takes care of the subscription...
        DataSource.addChangeListener(this.handleChange);
      }
  
      componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
      }
  
      handleChange() {
        this.setState({
          data: selectData(DataSource, this.props)
        });
      }
  
      render() {
        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        return <WrappedComponent data={this.state.data} {...this.props} />;
      }
    };
  }
  