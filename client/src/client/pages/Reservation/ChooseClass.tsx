import { useEffect, useState } from "react";
import Axios from "../../../services/axios";

interface Reservation {
  userId: number;
  salleId: number;
  dateReservation: string;
  heureReservation: string;
  duration: number;
  code: number;
};

interface Materiel {
  id: number;
  name: string;
  quantity: number;
  availability: boolean;
}

interface Salle {
  id: number;
  number: string;
  type: string;
  capacity: number;
  availability: boolean;
  startHour: string;
  endHour: string;
  materiels: Materiel[];
  isReserved: boolean;
}

interface ChooseClassProps {
  salles: Salle[];
  date: Date | null;
  onSalleSelect: (id: number) => void;
}

const ChooseClass: React.FC<ChooseClassProps> = ({ salles, date, onSalleSelect }) => {
  const [availableSalles, setAvailableSalles] = useState<Salle[]>([]);

  useEffect(() => {
    const fetchAvailableSalles = async () => {
      try {
        const response = await Axios.get('/reservation');
        const reservations: Reservation[] = response.data;
        
        const filteredSalles = salles.map((salle) => {

          const hasReservation = reservations.some((reservation) => {
            const reservationDate = new Date(reservation.dateReservation);
            const reservationEnd = new Date(reservationDate.getTime() + reservation.duration * 60000);
            const isWithinReservation = date && date >= reservationDate && date < reservationEnd;
            return salle.id === reservation.salleId && isWithinReservation;
          });
          return {
            ...salle,
            isReserved: hasReservation,
          };
        });

        setAvailableSalles(filteredSalles);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    if (date) {
      fetchAvailableSalles();
    }
  }, [date, salles]);

  return (
    <div className="row">
      {availableSalles.length > 0 ? (
        availableSalles.map((salle) => (
          <div className="flex flex-col mb-10" key={salle.id}>
            <button
              className="tl-3-single-event hover:bg-gray-100 text-black"
              onClick={() => onSalleSelect(salle.id)}
              disabled={!salle.availability || salle.isReserved}
            >
              <div className="tl-3-single-event-date hover:border-black border border-gray-300">
                <span className="date text-black">{salle.number}</span>
                <div className={`inline-flex items-center rounded-full text-xs justify-center px-1.5 py-0.5 ${salle.availability && !salle.isReserved ?  'bg-success' : 'bg-danger'} text-white w-30`}>
                  {salle.availability && !salle.isReserved ? 'Disponible' : 'Indisponible'}
                </div>
              </div>

              <div className="tl-3-single-event-txt">
                <h3 className="tl-3-single-event-title">
                  Salle Details
                </h3>
                <div className="tl-3-single-event-info">
                  <p>Capacity: {salle.capacity}</p>
                  <div>
                    <p>Materiels:</p>
                    <ul>
                      {salle.materiels.map((materiel) => (
                        <li key={materiel.id}>{materiel.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin inline-block w-16 h-16 border-4 border-l-transparent rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default ChooseClass;