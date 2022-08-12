// What would you do if your React application is rendering slowly?


// The cause of slow rendering in React is mostly because of the number of re-render operations, which are sometimes unnecessary. There are two main tools provided by React to help users here:

// memo(): This is used to prevent all of the unnecessary re-rendering carried out by the function components.
// PureComponent: This is used to ensure that the unnecessary re-rendering of class components is avoided.

// memo

import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);