import React, { useState } from 'react';

interface GroupFormProps {
  sallecategory: string;
  onGroupNumberChange: (groupNumber: number) => void;
  onDurationChange: (duration: number) => void;
}

const GroupForm: React.FC<GroupFormProps> = ({ sallecategory, onGroupNumberChange, onDurationChange }) => {
  const [groupNumber, setGroupNumber] = useState<number | ''>('');
  const [duration, setDuration] = useState<number | ''>('');

  const [durationAsString, setDurationAsString] = useState<string | null>(null);

  const handleDurationConversion = (value: string) => {
    const minutes = parseInt(value);

    if (!isNaN(minutes) && minutes >= 15 && minutes <= 300) { // 15 minutes to 5 hours (5*60 = 300 min)
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      const formattedDuration = `${hours > 0 ? `${hours}h` : ''}${remainingMinutes}min`;
      setDurationAsString(formattedDuration);
    } else {
      setDurationAsString(null);
    }
  };

  const handleGroupNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGroupNumber = e.target.value ? parseInt(e.target.value, 10) : '';
    setGroupNumber(newGroupNumber);
    if (newGroupNumber || newGroupNumber === 0) {
      onGroupNumberChange(newGroupNumber as number);
    }
  };

  const handleDurationChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDuration = e.target.value ? parseInt(e.target.value, 10) : '';
    setDuration(newDuration);
    if (newDuration || newDuration === 0) {
      onDurationChange(newDuration as number);
      handleDurationConversion(e.target.value);
    }
  };


  return (
    <>
      <div className="space-y-2 w-full flex flex-col align-center">
        <div className="items-center justify-center mb-4">
          <label htmlFor="groupNumber">{sallecategory === 'fablab' ? "Numero de groupe" : "Nombre des personnes"} <span className='text-red-800 mb-1' hidden={sallecategory === 'fablab' ? true : false}>[ 1 personne - 6 personnes ]</span></label>
          <input
            id="groupNumber"
            className="form-input border rounded-r-none mt-1"
            placeholder={sallecategory === 'fablab' ? 'Entrer le numero de groupe' : 'Entrer le nombre des personnes'}
            type="number"
            value={groupNumber}
            onChange={handleGroupNumberChange}
            min={1}
            max={6}
          />
        </div>
        <div className="flex items-center justify-between">
          <label>Duration <span className="text-red-800 mb-1">[ 15 min - 5h ]</span></label>
          {
            durationAsString != null &&
            <label className="mx-16 text-gray-500 italic">( {durationAsString} )</label>
          }
        </div>
        <div className="flex">
          <input
            className="form-input border rounded-r-none invalid:bg-red-200"
            placeholder="Duration"
            type="number"
            value={duration}
            onChange={handleDurationChange}
            min={15}
            max={300}
          />
        </div>
      </div>
    </>
  );
};

export default GroupForm;
