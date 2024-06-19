import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "../../styles/css/style.css"; 
import Calendar from '../calendar/Calendar';
import ChooseClass from '../../pages/Reservation/ChooseClass';
import ReservationForm from "../../pages/Reservation/ReservationForm";

interface Salle {
  id: number;
  number: string;
  type: string;
  capacity: number;
  availability: boolean;
  startHour: string;
  endHour: string;
  materiels: Materiel[];
}

interface Materiel {
  id: number;
  name: string;
  quantity: number;
  availability: boolean;
}

const Stepper = () => {
  const steps = ["Horaire", "Salle", "Informations"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [datetime, setDatetime] = useState<Date | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [salleData, setSalleData] = useState<Salle[]>([]);
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [groupNumber, setGroupNumber] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [reservationCode, setReservationCode] = useState('');

  const location = useLocation();
  const { category } = location.state || {};

  useEffect(() => {
    const fetchSalleData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/salle`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const allData: Salle[] = await response.json();
        const matchedSalle = allData.filter(salle => salle.type === category);
        setSalleData(matchedSalle);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    if (category) {
      fetchSalleData();
    }
  }, [category]);

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
    if (newDate && time) {
      const combinedDateTime = new Date(newDate);
      combinedDateTime.setHours(time.getHours(), time.getMinutes());
      setDatetime(combinedDateTime);
    }
  };

  const handleTimeChange = (newTime: Date | null) => {
    setTime(newTime);
    if (date && newTime) {
      const combinedDateTime = new Date(date);
      combinedDateTime.setHours(newTime.getHours(), newTime.getMinutes());
      setDatetime(combinedDateTime);
    }
  };

  const handleNextClick = async () => {
    if (currentStep === 1 && datetime === null) {
      alert('Veuillez sélectionner une date et une heure avant de continuer.');
      return;
    } else if (currentStep === 2 && selectedClass === null) {
      alert('Veuillez sélectionner une salle avant de continuer.');
      return;
    } else if (currentStep === 3 && (duration === null || groupNumber === null)) {
      alert('Veuillez sélectionner le nombre de votre groupe et la durée avant de continuer.');
      return;
    } else if (currentStep === 3) {
      // Generate a 4-digit code for the reservation
      const generated = Math.floor(1000 + Math.random() * 9000).toString();
      setReservationCode(generated);

      // Construct the reservation object
      const reservation = {
        userId: 1,
        salleId: selectedClass,
        dateReservation: datetime,
        heureReservation: (time? time.getHours() : '00') + ":" + (time? time.getMinutes() : '00'),
        duration: duration,
        code: generated
      };

      // Send the POST request to the /reservation API
      try {
        const response = await fetch('http://localhost:5000/reservation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservation),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        // Handle the response here
        const result = await response.json();
        console.log('Reservation successful:', result);
        setComplete(true);
      } catch (error) {
        console.error('Error during reservation:', error);
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const onSalleSelect = (id: number) => {
    setSelectedClass(id);
    setCurrentStep((prev) => prev + 1);
  };

  const handleGroupNumberChange = (groupNumber: number) => {
    setGroupNumber(groupNumber);
  };

  const handleDurationChange = (duration: number) => {
    setDuration(duration);
  };

  const firstSalleStartHour = salleData.length > 0 ? salleData[0].startHour : undefined;
  const firstSalleEndHour = salleData.length > 0 ? salleData[0].endHour : undefined;

  return (
    <>
      <div className="flex flex-col gap-10 max-w-md mx-auto p-4 border border-gray-300 shadow-lg rounded-lg mt-6 pt-5 mb-16">
        <div className="flex justify-between">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <img src="assets/images/done.png" alt="done image" style={{ height: '24px' }} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div>
        {currentStep === 1 && <Calendar onDateChange={handleDateChange} onTimeChange={handleTimeChange} startHour={firstSalleStartHour} endHour={firstSalleEndHour} />}
        {currentStep === 2 && <ChooseClass salles={salleData} onSalleSelect={onSalleSelect} />}
        {currentStep === 3 && <ReservationForm onGroupNumberChange={handleGroupNumberChange} onDurationChange={handleDurationChange} />}

        
        {complete && (
          // Render the div with the generated code only when the reservation is complete
          <div className="reservation-code">
            Votre code de reservation est : <strong>{reservationCode}</strong>
            Nous avons enboye le code a votre e-mail. Merci de le consulter.
          </div>
        )}
        
        {!complete && (
          <button
            className="btn bg-gray-500 text-white hover:bg-gray-400"
            onClick={handleNextClick}
          >
            {currentStep === steps.length ? "Confirmer" : "Suivant"}
          </button>
        )}
      </div>
    </>
  );
};

export default Stepper;
