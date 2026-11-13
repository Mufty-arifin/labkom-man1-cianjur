import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Projek tidak ditemukan
        </h2>
        <p className="text-gray-600">
          Maaf, karya atau projek yang Anda cari tidak tersedia.
        </p>
        <button
          onClick={() => navigate("/projek")}
          className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Kembali ke Daftar Projek
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8"
    >
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
      >
        <span>←</span>
        <span>Kembali</span>
      </button>

      {/* Header Detail */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-sm text-gray-500">
            Dipublikasikan pada {project.date}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 font-medium">
          Pembuat / Kontributor:{" "}
          <span className="text-blue-600">{project.author}</span>
        </p>
      </div>

      {/* Gambar Utama */}
      <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-72 sm:h-112.5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grid Konten Detail */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        {/* Kolom Deskripsi Utama */}
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">
              Deskripsi Projek
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">
              {project.fullDesc}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Fitur Utama</h3>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-2 text-gray-700"
                >
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kolom Sidebar Informasi Tambahan */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-6 self-start">
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">
              Teknologi Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-lg border border-gray-200 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-200">
            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">
              Akses Projek
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center py-2.5 rounded-xl shadow transition text-sm"
              >
                Lihat Demo Live 🚀
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-semibold text-center py-2.5 rounded-xl transition text-sm"
              >
                Repositori GitHub 📂
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
