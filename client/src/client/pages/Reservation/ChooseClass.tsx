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
    <div>
      {salles.length > 0 ? (
        salles.map((salle) => (
          salle.availability ? (
            <button
              key={salle.id}
              className="p-4 my-2 rounded bg-green-500 w-full text-left"
              onClick={() => onSalleSelect(salle.id)}
            >
            <p className="font-bold">Salle Number: <span className="normal-case">{salle.number}</span></p>
            <p>Type: {salle.type}</p>
            <p>Capacity: {salle.capacity}</p>
            <p>Availability: {salle.availability ? 'Available' : 'Unavailable'}</p>
            <div>
              <p>Materiels:</p>
              <ul>
                {salle.materiels.map((materiel) => (
                  <li key={materiel.id}>{materiel.name} - Quantity: {materiel.quantity} - {materiel.availability ? 'Available' : 'Unavailable'}</li>
                ))}
              </ul>
            </div>
            </button>
          ) : (
            <div key={salle.id} className="p-4 my-2 rounded bg-gray-300 w-full text-left">
            <p className="font-bold">Salle Number: <span className="normal-case">{salle.number}</span></p>
            <p>Type: {salle.type}</p>
            <p>Capacity: {salle.capacity}</p>
            <p>Availability: {salle.availability ? 'Available' : 'Unavailable'}</p>
            <div>
              <p>Materiels:</p>
              <ul>
                {salle.materiels.map((materiel) => (
                  <li key={materiel.id}>{materiel.name} - Quantity: {materiel.quantity} - {materiel.availability ? 'Available' : 'Unavailable'}</li>
                ))}
              </ul>
            </div>
            </div>
          )
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
