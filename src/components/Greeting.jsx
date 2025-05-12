import React from "react";

export default function Greeting(props) {
  const name = props.name;
  const children = props.children;
  const onGreeting = props.onGreeting;

  return (
    <div>
      <p onClick={onGreeting}>Hello, {name || "Altschoolers"}.</p>
      <p>You are welcome here.</p>
      {children}
    </div>
  );
}

function add(num2, numb1) {}

add(4, 6);
