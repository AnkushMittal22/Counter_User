import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(false);
  const [editableTime, setEditableTime] = useState(initialTime);

  useEffect(() => {
    let interval;

    if (running && time > 0) { // Check if time is greater than zero
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running, time]);

  const handleStartStop = () => {
    setRunning(!running);
  };

  const handleTimeChange = (e) => {
    setEditableTime(e.target.value);
  };

  const handleSetTime = () => {
    const newTime = parseInt(editableTime);
    if (newTime >= 0) { // Check if the new time is non-negative
      setTime(newTime);
    }
  };

  return (
    <div className={styles.timercontainer}>
      <p className={styles.timertext}>Countdown Time: {time} seconds</p>
      <input
        type="number"
        value={editableTime}
        onChange={handleTimeChange}
        min="0"  
        className={styles.timerinput}
      />
      <button onClick={handleSetTime} className={styles.timerbutton}>
        Set Time
      </button>
      <button onClick={handleStartStop} className={styles.timerbutton}>
        {running ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default CountdownTimer;
