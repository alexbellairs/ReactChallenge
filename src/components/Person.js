import { useState } from "react";

const Person = ({ name, age, handleClick }) => {
  const [due, setDue] = useState(false);

  return (
    <div>
      {due ? (
        <h4 style={{ color: "red" }}>
          My name is {name} and my age is {age}
        </h4>
      ) : (
        <h4>
          My name is {name} and my age is {age}
        </h4>
      )}

      <button onClick={handleClick}>Remove</button>
      <button
        onClick={() => {
          setDue(true);
        }}
      >
        Payment due
      </button>
    </div>
  );
};

export default Person;
