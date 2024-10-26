"use client";
import React, { useState, useEffect } from "react";


const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingtime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingtime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const handleStart = () => {
    if (time > 0) {
      setRemainingtime(time);
      setIsRunning(true);
    }
  };

  const handPause = () => {
    setIsRunning(false);
  };

  const handlereset = () => {
    setIsRunning(false);
    setRemainingtime(0);
    setTime(0);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-black to-gray-800">
      <img
        src="https://firebearstudio.com/blog/wp-content/uploads/2021/03/countdown-timer.jpg" alt="Timer"
      />
      <h1 className="text-4xl font-extrabold uppercase mb-6 text-white">
        Countdown Timer
      </h1>

      <input
        type="number"
        className="border-2 border-gray-400 bg-transparent p-3 mb-6 text-sky-400 text-xl rounded"
        placeholder="Enter Time in seconds"
        value={time > 0 ? time : ""}
        onChange={(e) => setTime(Number(e.target.value))}
      />

      <div className="text-3xl font-semibold uppercase mb-6 text-white">
        {remainingTime} seconds remaining
      </div>

      <div className="flex space-x-4">
        {/* Start Button - Blue */}
        <button
          onClick={handleStart}
          className="text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
        >
          Start
        </button>

        {/* Pause Button - Yellow */}
        <button
          onClick={handPause}
          className="text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800"
        >
          Pause
        </button>

        {/* Reset Button - Red */}
        <button
          onClick={handlereset}
          className="text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
        >
          Reset
        </button>
      </div>

      <footer className="mt-10 text-gray-300">Made by "Kanwal Rafiqe" </footer>
    </div>
  );
};

export default CountdownTimer;
