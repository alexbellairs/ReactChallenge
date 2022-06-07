import { useState } from "react";

const ConditionalRendering = () => {
  return (
    <div>
      <IfStatement />
      <Short />
      <Ternary />
    </div>
  );
};

const IfStatement = () => {
  const [bool, setBool] = useState(false);
  if (bool) {
    return (
      <div>
        <p style={{ color: "red" }}>If Statement</p>
        <h1>bool is true</h1>
        <button onClick={() => setBool(!bool)}>Click</button>
      </div>
    );
  }
  return (
    <div>
      <p style={{ color: "red" }}>If Statement</p>
      <h1>bool is false</h1>
      <button onClick={() => setBool(!bool)}>Click</button>
    </div>
  );
};

const Short = () => {
  const [bool, setBool] = useState(true);
  return (
    <div>
      <p style={{ color: "blue" }}>Shorthand Operator</p>
      {bool && <h1>bool is true</h1>}
      <button onClick={() => setBool(!bool)}>Click</button>
    </div>
  );
};

const Ternary = () => {
  const [bool, setBool] = useState(true);

  return (
    <div>
      <p style={{ color: "green" }}>Ternary Operator</p>
      {bool ? <h1>bool is true</h1> : <h1>bool is false</h1>}
      <button onClick={() => setBool(!bool)}>Click</button>
    </div>
  );
};

export default ConditionalRendering;
