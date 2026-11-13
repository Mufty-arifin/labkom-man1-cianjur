import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TataTertibSection() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = [
    { id: "Semua", label: "Semua Aturan", icon: "✨" },
    { id: "Ketentuan Umum", label: "Ketentuan Umum", icon: "📋" },
    { id: "Selama Penggunaan Lab", label: "Saat Praktikum", icon: "💻" },
    { id: "Setelah Selesai / Keluar Lab", label: "Selesai Pakai", icon: "🧹" },
  ];

  const rules = [
    {
      category: "Ketentuan Umum",
      icon: "📋",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      headerColor: "from-blue-600 to-indigo-600",
      items: [
        "Siswa wajib hadir di laboratorium 5 menit sebelum kegiatan dimulai.",
        "Meletakkan tas dan sepatu di rak/tempat yang telah disediakan di luar ruangan.",
        "Menjaga kebersihan, ketertiban, dan kenyamanan selama berada di dalam lab.",
        "Dilarang membawa makanan dan minuman ke dalam area komputer.",
      ],
    },
    {
      category: "Selama Penggunaan Lab",
      icon: "💻",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      headerColor: "from-indigo-600 to-purple-600",
      items: [
        "Menggunakan komputer sesuai dengan nomor perangkat atau instruksi guru/pembimbing.",
        "Dilarang keras mengubah pengaturan sistem (Control Panel, BIOS, atau instalasi software asing).",
        "Tidak diperkenankan membuka situs web terlarang atau bermain game online saat jam pelajaran/praktikum.",
        "Menjaga dan merawat perangkat keras (PC, keyboard, mouse, headset, proyektor) dengan hati-hati.",
      ],
    },
    {
      category: "Setelah Selesai / Keluar Lab",
      icon: "🧹",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      headerColor: "from-emerald-600 to-teal-600",
      items: [
        "Melakukan Shutdown PC dengan benar (jangan langsung mencabut kabel power).",
        "Merapikan kembali kursi, keyboard, dan mouse ke tempat semula.",
        "Mematikan AC, lampu, dan proyektor jika menjadi kelompok terakhir yang keluar.",
        "Memeriksa kembali barang bawaan agar tidak ada yang tertinggal di dalam lab.",
      ],
    },
  ];

  // Variant Animasi Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  const filteredRules =
    activeFilter === "Semua"
      ? rules
      : rules.filter((rule) => rule.category === activeFilter);

  return (
    <section
      id="tatatertib"
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10"
    >
      {/* 1. Header Animasi Fade-Down */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
          Disiplin & Ketentuan
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Tata Tertib Laboratorium Komputer
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Demi kelancaran, keamanan, dan kenyamanan bersama di Labkom MAN 1
          Cianjur, seluruh siswa wajib mematuhi ketentuan berikut.
        </p>
      </motion.div>

      {/* 2. Tombol Filter Tab Interaktif */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeFilter === cat.id
                ? "text-white shadow-md shadow-blue-500/20"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {activeFilter === cat.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-600 rounded-xl"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{cat.icon}</span>
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </motion.div>

      {/* 3. Grid Card Animasi Stagger & Dynamic Filter */}
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredRules.map((rule) => (
            <motion.div
              layout
              key={rule.category}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden flex flex-col justify-between"
            >
              {/* Header Card Gradien */}
              <div>
                <div className={`h-3 bg-linear-to-r ${rule.headerColor}`} />
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <motion.span
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="text-4xl p-3 bg-gray-50 rounded-2xl shadow-xs border border-gray-100 inline-block cursor-pointer"
                    >
                      {rule.icon}
                    </motion.span>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${rule.badgeBg}`}
                    >
                      Kategori Aturan
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {rule.category}
                  </h3>

                  <ul className="space-y-4 text-sm sm:text-base text-gray-600">
                    {rule.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start space-x-3 group"
                      >
                        <span className="shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 4. Banner Peringatan Animasi Pulsing Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-amber-50/80 backdrop-blur-md border border-amber-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="shrink-0 bg-amber-500 text-white p-3.5 rounded-2xl text-2xl shadow-md shadow-amber-500/20"
        >
          ⚠️
        </motion.div>
        <div className="space-y-1">
          <h4 className="text-base font-bold text-amber-900">
            Penting untuk Diperhatikan!
          </h4>
          <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
            Pelanggaran terhadap tata tertib di atas dapat dikenakan sanksi
            berupa teguran edukatif hingga pencabutan hak akses penggunaan
            fasilitas laboratorium komputer atas izin guru pembimbing.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
