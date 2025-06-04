import { useRef, useState } from "react";

const StopWathc = () => {
  const [startTime, setStartTime] = useState(null);

  const [now, setNow] = useState(null);
  let ref = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(ref.current);
  };

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h1>Stop Watch: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default StopWathc;
