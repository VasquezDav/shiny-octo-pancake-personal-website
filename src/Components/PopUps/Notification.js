import React, { useEffect, useState } from "react";

function Notification(props) {
  const [timerWidth, setTimerWidth] = useState(100);

  useEffect(() => {
    if (props.trigger) {
      setTimerWidth(100);

      const timer = setTimeout(() => {
        props.setTrigger(false);
      }, 2500);

      const interval = setInterval(() => {
        setTimerWidth((prevWidth) => prevWidth - 2);
      }, 50);
      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [props.trigger, props.setTrigger]);

  useEffect(() => {
    if (!props.trigger) {
      setTimerWidth(100);
    }
  }, [props.trigger]);

  return props.trigger ? (
    <div className="notification">
      <span className="notification-message">{props.message}</span>
      <div
        className="notification-timer"
        style={{ width: `${timerWidth}%` }}
      ></div>
      <button
        onClick={() => props.setTrigger(false)}
        className="notification-close"
      >
        &times;
      </button>
    </div>
  ) : null;
}

export default Notification;
