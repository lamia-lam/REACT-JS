import { useEffect, useState } from "react";
import "./style.css";

function AnalogClock() {
  const [time, SetTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      SetTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const second = time.getSeconds();
  const minuts = time.getMinutes();
  const hour = time.getHours();

  const secondHandleStyle = {
    transform: `rotate(${second * 6}deg)`,
  };

  const HanldeMinutsStyle = {
    transform: `rotate(${minuts * 6 + (second * 6) / 60}deg)`,
  };

  const HandleHourStyle = {
    transform: `rotate(${(hour % 12) * 30 + minuts * 0.5}deg)`,
  };

  return (
    <>
      <div className="clock-container">
        <h2>Analog clock</h2>

        <div className="clock">
          <div className="hand hour-hand" style={HandleHourStyle}></div>
          <div className="hand minuts-hand" style={HanldeMinutsStyle}></div>
          <div className="hand second-hand" style={secondHandleStyle}></div>
        </div>
      </div>
    </>
  );
}

export default AnalogClock;
