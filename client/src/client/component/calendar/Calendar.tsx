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
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState<Date | null>(null);

  // Helper function to parse hour string into a Date object
  const parseHour = (hourString: string, date: Date) => {
    const [hours, minutes] = hourString.split(':').map(Number);
    const time = new Date(date);
    time.setHours(hours, minutes, 0, 0); // Set seconds and milliseconds to 0
    return time;
  };

  const today = new Date();
  const currentHour = today.getHours();
  const [startHourNumber, startMinute] = startHour.split(':').map(Number);
  const [endHourNumber, endMinute] = endHour.split(':').map(Number);


  // Determine if the selected date is today and if the current hour is less than the startHour
  const isTodayAndBeforeStartHour = startDate?.toDateString() === today.toDateString() && currentHour < startHourNumber;

  // Calculate minTime based on whether the selected date is today and comparing current hour with startHour
  const minTime = startDate && (startDate > today || isTodayAndBeforeStartHour) 
    ? parseHour(startHour, startDate) 
    : isTodayAndBeforeStartHour 
      ? parseHour(startHour, today) 
      : parseHour(`${currentHour}:${today.getMinutes()}`, today);

  // Determine if the selected date is today and if the current hour is less than the endHour
  const isTodayAndBeforeEndHour = startDate?.toDateString() === today.toDateString() && currentHour < endHourNumber;

  // Calculate maxTime based on whether the selected date is today and comparing current hour with endHour
  const maxTime = startDate?.toDateString() === today.toDateString() && isTodayAndBeforeEndHour
    ? parseHour(endHour, today)
    : parseHour(`${currentHour}:${today.getMinutes()}`, today);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    onDateChange(date);
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
