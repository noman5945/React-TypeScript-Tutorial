import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interVal = useRef<number | undefined>(undefined);
  const stopTimer = () => {
    window.clearInterval(interVal.current);
  };

  useEffect(() => {
    interVal.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      HookTimer-{timer}-<button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
