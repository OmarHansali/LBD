/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import TableContainer from "../../components/TableContainer";
import { iReservationType } from "../../constants/Types";
import Axios from "../../../services/axios";
import LoadingPage from "../../components/LoadingPage";
const Reservations = () => {

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Date de reservation",
            accessorKey: "dateReservation",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Heure",
            accessorKey: "heureReservation",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Utilisateur",
            accessorKey: "username",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Chambre",
            accessorKey: "salleName",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Duration (Minutes)",
            accessorKey: "duration",
            enableColumnFilter: false,
            enableSorting: true,
        },
    ];



    const [reservations, setReservations] = useState<iReservationType[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await Axios.get("/reservation")

            const mappedData = response.data.map((reservation: any )=> ({
                ...reservation,
                username: reservation.user.username,
                salleName: `${reservation.salle.type}: ${reservation.salle.number}`
            }));
            setReservations(mappedData)
        }

        fetchData()
        setIsLoading(false)
    }, [])

    console.log(reservations);


    return (
        <>
            <h1 className="header capitalize">Gérer les Reservations</h1>
            <LoadingPage isLoading={isLoading} />
            <TableContainer
                columns={columns}
                data={reservations}
                isGlobalFilter={true}
                customPageSize={5}
                isSelect={true}
                isPagination={true}
                divclassName="overflow-auto"
                tableclassName="min-w-[640px] w-full"
                page="reservation"
            />
        </>
    );
};

export default Reservations;