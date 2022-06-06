const Pet = ({ petsName, type }) => {
  return (
    <div>
      <h2>
        My pets name is {petsName} and he is a {type}
      </h2>
    </div>
  );
};

export default Pet;
