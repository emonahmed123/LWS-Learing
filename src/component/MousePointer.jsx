import { useState } from "react";

const MousePointer = () => {
  const [positon, setPositon] = useState({
    x: 0,
    y: 0,
  });

  const hangdelmouseChange = (e) => {
    setPositon({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      style={{
        position: "relative ",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
      }}
      onPointerMove={hangdelmouseChange}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "black",
          borderRadius: "50%",
          left: 10,
          top: 10,
          width: 20,
          height: 20,
          transform: `translate(${positon.x}px,${positon.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default MousePointer;
