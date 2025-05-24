import { useState } from "react";

const From = () => {
  const [inputs, setInput] = useState([
    {
      id: 1,
      label: "input",
    },
  ]);

  const handleAddInput = () => {
    const nextId = inputs;
    console.log(nextId);
    setInput([
      ...inputs,
      {
        id: 2,
        label: "input",
      },
    ]);
  };

  function parseExpression(expression) {
    const value = eval(expression);

    return value;
  }

  parseExpression("2*(3+4)+2");
  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id}>
          <input type="text" label={input.label} />
        </div>
      ))}

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <button onClick={handleAddInput}> add</button>
      </div>
    </div>
  );
};

export default From;
