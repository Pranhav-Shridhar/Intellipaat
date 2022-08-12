// What are the components of Redux in React?

// Redux consists of four main components as shown below:

// Action: An object that describes the call
// Reducer: The state change storage unit
// Store: the state and object tree storage
// View: Displays data provided by the store

function Counter() {
    // State: a counter value
    const [counter, setCounter] = useState(0)
  
    // Action: code that causes an update to the state when something happens
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1)
    }
  
    // View: the UI definition
    return (
      <div>
        Value: {counter} <button onClick={increment}>Increment</button>
      </div>
    )
  }