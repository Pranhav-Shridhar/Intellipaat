// What are pure components in React?

// Pure components are singular entities that are written in React. They are fast and simple to write and have the ability to replace a component that has only the render() function. This is done to ensure that the performance of the application is good and that the code is kept simple at the same time.

// FUNCTIONAL COMPONENT
function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
    return (
      <div>
        <h6>{ label }</h6>
        <span>{ Math.round(score / total * 100) }%</span>
      </div>
    )
  }
  
  
  // CONVERTED TO PURE COMPONENT
  class PercentageStat extends React.PureComponent {
  
    render() {
      const { label, score = 0, total = Math.max(1, score) } = this.props;
  
      return (
        <div>
          <h6>{ label }</h6>
          <span>{ Math.round(score / total * 100) }%</span>
        </div>
      )
    }
  
  }

  