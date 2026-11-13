import { galleries } from "../data/galleriesData";

export default function GallerySection() {
  const galleriesView = galleries.slice(0, 4); // Ambil 4 karya teratas
  return (
    <section className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Galeri & Album Kegiatan
        </h2>
        <p className="text-gray-600 mt-2">
          Dokumentasi aktivitas belajar, ujian, dan fasilitas di Lab Komputer
          MAN 1 Cianjur.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleriesView.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition group"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                {item.category}
              </span>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
