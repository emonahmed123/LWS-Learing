import React from "react";
import MyInput from "./myInput";

const From = () => {
  const inputRef = React.useRef(null);
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <MyInput type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
};

export default From;
