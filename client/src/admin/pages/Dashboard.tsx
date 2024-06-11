import { DonutChart, LineChart } from "../components/Chats"
import StatisticsCard from "../components/StatisticsCard"
import { materials } from "../data/Data"

const Dashboard = () => {
    return (
        <>
            <h1 className="header mb-3">Dashboard</h1>
            <div className="space-y-4 flex flex-col gap-1 md:gap-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 h-28">
                    <StatisticsCard text="Nombre total d'utilisateurs" title="utilisateurs" number={139} />
                    <StatisticsCard text="Nombre total des salles" title="salles" number={96} />
                    <StatisticsCard text="Nombre des salles disponibles" title="salles" number={16} />
                    <StatisticsCard text="Nombre total des réservations" title="Réservations" number={20} />
                </div>
                <div className="grid grid-cols-10 gap-2 h-full">
                    <div className="col-span-6">
                        <LineChart title ="Visiteurs" />
                    </div>


                    <div className="col-span-4">
                        <DonutChart
                            title="Matériaux"
                            labels={materials.map(material => material.material)}
                            seriesValue={materials.map(material => material.quantity)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard