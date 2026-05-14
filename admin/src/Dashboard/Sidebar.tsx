// components/Sidebar.tsx

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({
  activeTab,
  setActiveTab,
}: Props) {
  const navItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: "fa-solid fa-table-columns",
    },
    {
      id: "tables",
      title: "Table Generation",
      icon: "fa-solid fa-table-columns",

    },
    {
      id: "courses",
      title: "Courses",
      icon: "fa-solid fa-book",
    },
    {
      id: "learners",
      title: "Learners",
      icon: "fa-solid fa-users",
    },
  ];

  return (
    <div className="w-[250px] h-screen bg-[#0f2347] text-white p-5">
      {/* Logo */}
      <h1 className="text-3xl font-bold mb-10">
        Qurtubiks
      </h1>

      {/* Nav Items */}
      <div className="space-y-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              activeTab === item.id
                ? "bg-[#1f3b6d]"
                : "hover:bg-[#1f3b6d]"
            }`}
          >
            <i className={item.icon}></i>

            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}