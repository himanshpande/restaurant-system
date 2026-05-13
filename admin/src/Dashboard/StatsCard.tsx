// dashboard/StatsCard.tsx

interface Props {
  title: string;
  count: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

export default function StatsCard({
  title,
  count,
  icon,
  bgColor,
  iconColor,
}: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {count}
          </h2>
        </div>

        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor}`}
        >
          <i className={`${icon} ${iconColor}`}></i>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
        View all

        <i className="fa-solid fa-chevron-right text-xs"></i>
      </div>
    </div>
  );
}