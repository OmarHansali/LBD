import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarProps {
  onDateChange: (date: Date | null) => void;
  onTimeChange: (time: Date | null) => void;
  startHour?: string;
  endHour?: string;
}

const Calendar: React.FC<CalendarProps> = ({ onDateChange, onTimeChange, startHour = "08:00", endHour = "18:00" }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [minTime, setMinTime] = useState<Date>();
  const [maxTime, setMaxTime] = useState<Date>();
  
  const parseHour = (hourString: string, date: Date) => {
    const [hours, minutes] = hourString.split(':').map(Number);
    const time = new Date(date);
    time.setHours(hours, minutes, 0, 0);
    return time;
  };

  const today = new Date();
  const todayHour = new Date();


  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    onDateChange(date);
    
    console.log(today.toDateString())
    console.log(startDate?.toDateString())

    if (date?.toDateString() === today.toDateString()) {
      todayHour.setHours(Number(today.getHours()), Number(today.getMinutes()), 0, 0);
  
      if (Number(today.getHours()) >= Number(startHour.split(':')[0])) {
        setMinTime(todayHour);
      } else {
        setMinTime(parseHour(startHour, date));
      }
  
      if (Number(today.getHours()) >= Number(endHour.split(':')[0])) {
        if (Number(today.getMinutes()) >= Number(endHour.split(':')[1])) {
          setMaxTime(todayHour);
        } else {
          setMaxTime(parseHour(endHour, date));
        }
      } else {
        setMaxTime(parseHour(endHour, date));
      }
    } else {
      setMinTime(parseHour(startHour, today));
      setMaxTime(parseHour(endHour, today));
    }
  };

  const handleTimeChange = (time: Date | null) => {
    setStartTime(time);
    onTimeChange(time);
  };

  return (
    <div className='flex flex-col'>
      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
        Choisissez la date souhaitée:
      </label>
      <input
        type="date"
        id="date"
        min={today.toISOString().substring(0, 10)}
        onChange={(e) => handleDateChange(e.target.value ? new Date(e.target.value) : null)}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <label htmlFor="time" className="block mt-4 text-sm font-medium text-gray-700">
        Choisissez l'heure souhaitée:
      </label>
      
      <DatePicker
        selected={startTime}
        onChange={handleTimeChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        minTime={minTime}
        maxTime={maxTime}
        timeCaption="Time"
        dateFormat="HH:mm"
        className="w-full mt-1 block py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default Calendar;
