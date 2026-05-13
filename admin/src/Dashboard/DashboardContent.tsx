// dashboard/Dashboard.tsx

import StatsCard from "./StatsCard";



export default function Dashboard() {
  return (
    <div>
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <div className="flex items-center gap-5">
          <i className="fa-regular fa-bell text-xl text-gray-500"></i>

          <img
            src="https://i.pravatar.cc/40"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-5">
        <StatsCard
          title="Meetings Today"
          count="3"
          icon="fa-solid fa-video"
          bgColor="bg-blue-100"
          iconColor="text-blue-500"
        />

        <StatsCard
          title="Pending Tasks"
          count="24"
          icon="fa-solid fa-list-check"
          bgColor="bg-purple-100"
          iconColor="text-purple-500"
        />

        <StatsCard
          title="Done Tasks"
          count="2"
          icon="fa-solid fa-shield"
          bgColor="bg-green-100"
          iconColor="text-green-500"
        />
      </div>
    </div>
  );
}