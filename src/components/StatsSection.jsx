export default function StatsSection() {
  const stats = [
    {
      icon: "🖥️",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      title: "Total Komputer",
      value: "40 Unit Siap Pakai",
    },
    {
      icon: "⚡",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      title: "Koneksi Internet",
      value: "Dedicated 200 Mbps",
    },
    {
      icon: "❄️",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      title: "Kenyamanan",
      value: "Full AC & Proyektor",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4"
        >
          <div
            className={`p-3 ${item.bgColor} ${item.textColor} rounded-lg text-2xl`}
          >
            {item.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{item.title}</p>
            <p className="text-2xl font-bold text-gray-900">{item.value}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
