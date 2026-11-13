import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

export default function ProjectsPreview() {
  const featuredProjects = projectsData.slice(0, 3); // Ambil 3 karya teratas

  return (
    <section className="py-12 space-y-8 ">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Karya Inovatif Siswa
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Projek & Hasil Karya Labkom
          </h2>
          <p className="text-gray-600 max-w-xl">
            Hasil kreativitas, eksperimen teknologi, dan inovasi digital dari
            siswa-siswi MAN 1 Cianjur.
          </p>
        </div>
        <Link
          to="/projek"
          className="inline-flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-5 py-2.5 rounded-xl transition duration-200 self-start md:self-auto"
        >
          <span>Lihat Semua Projek</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {project.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs text-gray-500 font-medium">
                  {project.author} • {project.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <Link
                to={`/projek/${project.id}`}
                className="w-full block text-center bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-800 font-semibold py-2.5 rounded-xl border border-gray-200 hover:border-transparent transition duration-200 text-sm"
              >
                Lihat Detail Projek
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
