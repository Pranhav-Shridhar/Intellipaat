// What are controlled components in React?

// Controlled components in React refer to the components that have the ability to maintain their state. The data is completely controlled by the parent component, and the current value is fetched by making use of props. This is done to notify about any change that occurs when using callbacks.

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    function onSubmit() {
      console.log("Name value: " + name);
      console.log("Email value: " + email);
    }
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }