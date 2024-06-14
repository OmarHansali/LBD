import { useEffect, useState } from "react"
import { DonutChart, LineChart } from "../components/Chats"
import StatisticsCard from "../components/StatisticsCard"
import Axios from "../../services/axios"
import { iMaterialType, iSalleType, iUserType } from "../constants/Types"
import { countData } from "../../services/utils"

const Dashboard = () => {

    const [users, setUsers] = useState()
    const [rooms, setRooms] = useState()
    const [salles, setSalles] = useState()
    const [reservations, setReservations] = useState()
    const [materials, setMaterials] = useState<iMaterialType[]>()

    useEffect(() => {
        const fetchData = async () => {
            await Axios.get("/user").then((res) => { setUsers((res.data).filter((data: iUserType) => data.role != "admin")) })
            await Axios.get("/salle").then((res) => { setSalles((res.data).filter((data: iSalleType) => data.type ==  "salle")) })
            await Axios.get("/reservation").then((res) => { setReservations((res.data))})
            await Axios.get("/salle").then((res) => { setRooms((res.data))})
            await Axios.get("/materiel").then((res) => { setMaterials((res.data)) })
        }

        fetchData()
    }, [])

    return (
        <>
            <h1 className="header mb-3 dark:text-white">Dashboard</h1>
            <div className="md:space-y-6 xs:space-y-32 flex flex-col gap-1 md:gap-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-2 h-28">
                    <StatisticsCard text="Nombre total d'utilisateurs" title="utilisateurs" number={countData(users)} />
                    <StatisticsCard text="Nombre total des chambres" title="Chambres" number={countData(rooms)} />
                    <StatisticsCard text="Nombre des salles" title="salles" number={countData(salles)} />
                    <StatisticsCard text="Nombre total des réservations" title="Réservations" number={countData(reservations)} />
                </div>
                <div className="grid grid-cols-10 xs:grid-cols-2 gap-2 h-full">
                    <div className="col-span-6">
                        <LineChart title="Visiteurs" />
                    </div>

                    <div className="col-span-4">
                        <DonutChart
                            title="Matériaux"
                            labels={materials && materials.map(material => material.name)}
                            seriesValue={materials && materials.map(material => material.quantity)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard