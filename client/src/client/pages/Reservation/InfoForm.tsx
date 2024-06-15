import ReservationForm from "../../../admin/components/ReservationForm"; //  ../../..admin/components/ReservationForm

const CreateReservation = () => {
    
    const [durationAsString, setDurationAsString] = useState<string | null>(null)
    
    const handleDurationConversion = (value: string) => {
        const minutes = parseInt(value);

        if (minutes >= 15 && minutes <= 300) { // 15 minutes to 5 hours (15*60 = 900 min)
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            const formattedDuration = `${hours > 0 ? `${hours}h` : ''} ${remainingMinutes}min`;
            setDurationAsString(formattedDuration);
        } else {
            setDurationAsString(null);
        }
    };
    
    return (
        <>
        <div className="space-y-2 w-full">
                        <div className="flex items-center justify-between">
                            <label>Duration <span className="text-red-800">[ 15 min - 5h ]</span></label>
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
                                value={inputs['duration']}
                                onChange={(e) => {
                                    handleChange("duration", e.target.value)
                                    handleDurationConversion(e.target.value)
                                }}
                                min={15}
                                max={300}
                            />
                        </div>
                    </div>
        </>
    )
}
export default CreateReservation