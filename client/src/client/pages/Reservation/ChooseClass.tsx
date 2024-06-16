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
}

interface ChooseClassProps {
  salles: Salle[];
  onSalleSelect: (id: number) => void; // Add a callback prop for when a salle is selected
}

const ChooseClass: React.FC<ChooseClassProps> = ({ salles, onSalleSelect }) => {
  return (
    <div className="row">
      {salles.length > 0 ? (
        salles.map((salle) => (
          <div className="flex flex-col mb-10" key={salle.id}>
            <button
              className="tl-3-single-event hover:bg-gray-100 text-black"
              onClick={() => onSalleSelect(salle.id)}
              disabled={!salle.availability}
            >
              <div className="tl-3-single-event-date hover:border-black border border-gray-300">
                <span className="date text-black">{salle.number}</span>
                <div className={`inline-flex items-center rounded-full text-xs justify-center px-1.5 py-0.5 ${salle.availability ? 'bg-success' : 'bg-danger'} text-white w-30`}>{salle.availability ? 'Disponible' : 'Indisponible'}</div>
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
                        <li key={materiel.id}>{materiel.name} - Quantity: {materiel.quantity} - {materiel.availability ? 'Available' : 'Unavailable'}</li>
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