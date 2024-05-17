"use client";
import React, { useState } from "react";
import Countdown from "react-countdown";
interface TimeProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const EventTimer = () => {
  const duration = 7 * 24 * 60 * 60 * 1000;

  const [countdownCompleted, setCountdownCompleted] = useState(false);

  const formatTimer: React.FC<TimeProps> = ({
    days,
    hours,
    minutes,
    seconds,
  }) => {
    return (
      <div className="syotimer__body">
        <div className="syotimer-cell syotimer-cell_type_day">
          <div className="syotimer-cell__value">{days}</div>
          <div className="syotimer-cell__unit">days</div>
        </div>
        <div className="syotimer-cell syotimer-cell_type_hour">
          <div className="syotimer-cell__value">{hours}</div>
          <div className="syotimer-cell__unit">hours</div>
        </div>
        <div className="syotimer-cell syotimer-cell_type_minute">
          <div className="syotimer-cell__value">{minutes}</div>
          <div className="syotimer-cell__unit">minutes</div>
        </div>
        <div className="syotimer-cell syotimer-cell_type_second">
          <div className="syotimer-cell__value">{seconds}</div>
          <div className="syotimer-cell__unit">seconds</div>
        </div>
      </div>
    );
  };

  const handleCountdownComplete = () => {
    setCountdownCompleted(true);
  };

  return (
    <div className="tl-event-details-area">
      <h3 className="tl-event-details-area-title">
        Time left to book the event
      </h3>
      <div className="tl-event-details-countdown-area">
        {countdownCompleted ? (
          <p style={{ fontSize: "1.2rem" }}>The countdown is finished!</p>
        ) : (
          <Countdown
            date={Date.now() + duration}
            renderer={formatTimer}
            autoStart
            onComplete={handleCountdownComplete}
          />
        )}
      </div>
    </div>
  );
};

export default EventTimer;
