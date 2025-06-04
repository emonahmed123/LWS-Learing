import { useRef } from "react";

const Scroller = () => {
  const myRef = useRef(null);

  const handleScroll = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div style={{ height: "100vh" }}>Scroll down to see the magic!</div>
      <div style={{ height: "100vh" }} ref={myRef}>
        Hello
      </div>
      <button onClick={handleScroll}>Scroll to Hello</button>
    </div>
  );
};

export default Scroller;
