import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task "
      />

      <button
        onClick={() => {
          setText(" ");

          onAdd(text);
        }}
      >
        Add{" "}
      </button>
    </>
  );
};

export default AddTask;
