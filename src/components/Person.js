const Person = ({ name, age, handleClick }) => {
  return (
    <div>
      <h1>
        My name is {name} and I am {age} years old{" "}
      </h1>
      <button onClick={handleClick}>Remove</button>
    </div>
  );
};

export default Person;
