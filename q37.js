// Differentiate between a controlled component and an uncontrolled component in React.

// A controlled component, as the name suggests, is a component over which React has complete control. It is the singular point of data for the forms.

// An uncontrolled component is one where the form data gets handled by DOM and not the React component. This is usually done using refs in React.

//Controlled components:

import React, { useState } from "react";

const Controlled = () => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
  };

  return (
    <form>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Controlled;

//Uncontrolled components:

// import React, { useRef } from "react";

// const Uncontrolled = () => {
//   const inputRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputRef.current.value);
//   };

//   return (
//     <form>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleSubmit}>Submit</button>
//     </form>
//   );
// };

// export default Uncontrolled;