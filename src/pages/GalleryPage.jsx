import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleries } from "../data/galleriesData";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeImage, setActiveImage] = useState(null); // State untuk menyimpan foto yang sedang dibuka di modal

  const categories = [
    "Semua",
    "Pembelajaran",
    "Ujian",
    "Ekstrakurikuler",
    "Fasilitas",
  ];

  // const galleries = [
  //   {
  //     title: "Praktikum Siswa",
  //     category: "Pembelajaran",
  //     image:
  //       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  //     description:
  //       "Kegiatan praktikum pemrograman dasar dan pengembangan web di Lab Komputer.",
  //   },
  //   {
  //     title: "Pelaksanaan ANBK",
  //     category: "Ujian",
  //     image:
  //       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  //     description:
  //       "Siswa mengikuti simulasi dan asesmen nasional berbasis komputer dengan tertib.",
  //   },
  //   {
  //     title: "Ekskul Robotik & Coding",
  //     category: "Ekstrakurikuler",
  //     image:
  //       "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  //     description:
  //       "Klub teknologi dan robotik sedang merakit perangkat serta belajar coding bersama.",
  //   },
  //   {
  //     title: "Fasilitas Komputer Modern",
  //     category: "Fasilitas",
  //     image:
  //       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  //     description:
  //       "Unit PC berperforma tinggi lengkap dengan koneksi internet cepat pendukung belajar.",
  //   },
  //   {
  //     title: "Pelatihan Guru TIK",
  //     category: "Pembelajaran",
  //     image:
  //       "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
  //     description:
  //       "Sesi peningkatan kompetensi digital bagi tenaga pendidik MAN 1 Cianjur.",
  //   },
  //   {
  //     title: "Ujian Semester Berbasis Web",
  //     category: "Ujian",
  //     image:
  //       "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
  //     description:
  //       "Suasana tenang dan kondusif saat pelaksanaan ujian akhir semester.",
  //   },
  // ];

  const filteredGalleries =
    selectedCategory === "Semua"
      ? galleries
      : galleries.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header Halaman */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
          Dokumentasi Visual
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Album & Galeri Kegiatan Labkom
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Kumpulan potret aktivitas belajar, ujian berbasis komputer,
          ekstrakurikuler, serta fasilitas pendukung di Lab Komputer MAN 1
          Cianjur. Klik pada gambar untuk memperbesar.
        </p>
      </motion.div>

      {/* Filter Kategori Interaktif */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              selectedCategory === cat
                ? "text-white shadow-md shadow-blue-500/20"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {selectedCategory === cat && (
              <motion.div
                layoutId="activeGalleryTab"
                className="absolute inset-0 bg-blue-600 rounded-xl"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </motion.div>

      {/* Grid Galeri */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredGalleries.map((item) => (
            <motion.div
              layout
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition group flex flex-col justify-between cursor-pointer"
              onClick={() => setActiveImage(item)}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {item.category}
                </span>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-gray-900 font-semibold text-xs px-3 py-1.5 rounded-lg shadow-lg">
                    🔍 Perbesar Gambar
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3 grow">
                <h3 className="font-bold text-gray-900 text-xl group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* LIGHTBOX MODAL (POPUP LAYAR PENUH - TANPA DOWNLOAD) */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Tombol Tutup Modal (X) */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition"
              >
                ✕
              </button>

              {/* Gambar Diperbesar */}
              <div className="relative bg-black h-72 sm:h-96 flex items-center justify-center overflow-hidden">
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Detail Informasi Foto (Tanpa Tombol Download) */}
              <div className="p-6 sm:p-8 space-y-2 bg-white">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-1">
                  {activeImage.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {activeImage.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-2xl">
                  {activeImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
