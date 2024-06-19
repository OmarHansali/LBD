import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Spinner } from "../../../admin/components/icons/SVGIcons";
import Axios from "../../../services/axios";
import "../../styles/css/style.css"; 
import Calendar from '../calendar/Calendar';
import ChooseClass from '../../pages/Reservation/ChooseClass';
import ReservationForm from "../../pages/Reservation/ReservationForm";
import loggedUser from "../../../services/LoggedUser";

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
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [SpinnerVisibility, setSpinnerVisibility] = useState(false);

  const location = useLocation();
  const { category } = location.state || {};

  const { id } = loggedUser

  useEffect(() => {
    const fetchSalleData = async () => {
      try {
        const response = await Axios.get('/salle');
        const allData: Salle[] = response.data;

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
      setSpinnerVisibility(true);
      setIsButtonDisabled(true);
      const generated = Math.floor(1000 + Math.random() * 9000).toString();
      setReservationCode(generated);
  
      const reservation = {
        userId: id,
        salleId: selectedClass,
        dateReservation: datetime,
        heureReservation: (time ? `${time.getHours()}:${time.getMinutes()}` : 'Nn:Nn'),
        duration: duration,
        code: generated
      };
  
      try {
        const response = await Axios.post('/reservation', reservation);
        console.log('Reservation successful:', response.data);
        setComplete(true);
        setSpinnerVisibility(false);
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
      <div className="flex flex-col gap-10 max-w-lg mx-auto p-4 border border-gray-300 shadow-lg rounded-lg mt-6 pt-5 mb-16">
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
        <div className="flex-col" style={{ zIndex: 9999 }}>
          {currentStep === 1 && <Calendar onDateChange={handleDateChange} onTimeChange={handleTimeChange} startHour={firstSalleStartHour} endHour={firstSalleEndHour} />}
        </div>
        <div className="flex justify-center">
          {currentStep === 2 && <ChooseClass salles={salleData} onSalleSelect={onSalleSelect} />}
          {currentStep === 3 && <ReservationForm sallecategory={category} onGroupNumberChange={handleGroupNumberChange} onDurationChange={handleDurationChange} />}
        </div>

        
        {complete && (
          <div className="reservation-code flex flex-col items-center justify-center text-center">
            <Spinner fontSize={30} visibility={SpinnerVisibility ? 'visible' : 'hidden'}/> 
            <p className="mt-2">Votre code de reservation "<strong>{reservationCode}</strong>" est envoyer a votre boite mail</p>
          </div>
        )}
        
        {!complete && (
          <button
            className="btn bg-gray-500 text-white hover:bg-gray-400"
            onClick={handleNextClick}
            disabled={isButtonDisabled}
          >
            {currentStep === steps.length ? "Confirmer" : "Suivant"}
          </button>
        )}
      </div>
    </>
  );
};

export default Stepper;
