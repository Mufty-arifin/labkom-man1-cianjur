import { useState, useEffect } from "react";

export default function HeroSection() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80",
      title: "Selamat Datang di Labkom MAN 1 Cianjur",
      subtitle:
        "Pusat pembelajaran digital dan fasilitas teknologi modern untuk mendukung kegiatan belajar mengajar siswa.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
      title: "Ujian Berbasis Komputer & Asesmen Digital",
      subtitle:
        "Infrastruktur server dan jaringan yang stabil untuk kelancaran pelaksanaan ANBK dan ujian sekolah.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80",
      title: "Wadah Inovasi & Ekskul Teknologi",
      subtitle:
        "Mendukung pengembangan bakat siswa dalam bidang Pemrograman, Web Development, dan Robotik.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <header className="relative w-full h-screen min-h-150 flex items-center justify-center text-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          } transition-transform duration-7000`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-950/85 via-indigo-950/75 to-blue-900/80" />
        </div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
          {slides[currentIndex].title}
        </h1>
        <p className="text-lg sm:text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow-sm font-light">
          {slides[currentIndex].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5">
            Lihat Jadwal
          </button>
          <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/40 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition">
            Cek Status Perangkat
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-yellow-400"
                : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </header>
  );
}
