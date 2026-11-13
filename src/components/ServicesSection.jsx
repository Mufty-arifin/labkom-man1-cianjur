export default function ServicesSection() {
  const services = [
    {
      icon: "📚",
      title: "Praktikum Informatika",
      description:
        "Kegiatan belajar mengajar pemrograman, pengolahan dokumen, dan desain grafis.",
    },
    {
      icon: "📝",
      title: "Ujian Berbasis Komputer",
      description:
        "Pelaksanaan Asesmen Nasional (ANBK), Ujian Sekolah, dan Penilaian Akhir Semester.",
    },
    {
      icon: "🤖",
      title: "Ekskul Robotik & Coding",
      description:
        "Wadah pengembangan bakat siswa di bidang pemrograman, web development, dan teknologi.",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Layanan Laboratorium
        </h2>
        <p className="text-gray-600 mt-2">
          Dukungan fasilitas komputasi untuk berbagai kegiatan akademis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
          >
            <span className="text-4xl block mb-4">{service.icon}</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
