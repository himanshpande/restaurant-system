// layout/MainLayout.tsx

import { useState } from "react";
import Dashboard from "./DashboardContent";
import Sidebar from "./Sidebar";
import Tables from "../TableGeneration/Tables";


export default function MainLayout() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderPage = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "tables":
        return<Tables/>;

      case "courses":
        return (
          <div className="text-3xl font-bold">
            Courses Page
          </div>
        );

      case "learners":
        return (
          <div className="text-3xl font-bold">
            Learners Page
          </div>
        );

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#f5f6fa]">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Right Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {renderPage()}
      </div>
    </div>
  );
}