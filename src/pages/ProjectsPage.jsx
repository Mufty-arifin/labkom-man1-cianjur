import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
          Galeri Inovasi
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Karya & Projek Siswa MAN 1 Cianjur
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Kumpulan hasil karya terbaik di bidang pemrograman, web development,
          IoT, dan robotik yang dikembangkan oleh siswa di Laboratorium
          Komputer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between"
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {project.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs text-gray-500 font-medium">
                  {project.author} • {project.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <Link
                to={`/projek/${project.id}`}
                className="w-full block text-center bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-semibold py-2.5 rounded-xl transition duration-200 text-sm"
              >
                Selengkapnya →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
