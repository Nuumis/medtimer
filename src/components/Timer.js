import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
    const [time, setTime] = useState(0);
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        let interval;

        if (timerActive) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerActive]);

    const startTimer = () => {
        setTimerActive(true);
    };

    const pauseTimer = () => {
        setTimerActive(false);
    };

    const resetTimer = () => {
        setTimerActive(false);
        setTime(0);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="Timer">
            <h1>{formatTime(time)}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default Timer;
