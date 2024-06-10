import { DonutChart, LineChart } from "../components/Chats"
import StatisticsCard from "../components/StatisticsCard"
import { materials } from "../data/Data"

const Dashboard = () => {
    return (
        <>
            <h1 className="header mb-3">Dashboard</h1>
            <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2 h-28">
                    <StatisticsCard text="Total Users" title="users" number={139} />
                    <StatisticsCard text="Total Salles" title="salles" number={96} />
                    <StatisticsCard text="Available Salles" title="salles" number={16} />
                    <StatisticsCard text="Total Reservations" title="reservations" number={20} />
                </div>
                <div className="grid grid-cols-10 gap-2 h-full">
                    <div className="col-span-6">
                        <LineChart title ="Visitors (insights)" />
                    </div>


                    <div className="col-span-4">
                        <DonutChart
                            title="Materials"
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