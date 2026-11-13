import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
import ProjectsPreview from "../components/ProjectsPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <main className="grow py-12 space-y-16">
        {/* 1. Stats & Services tetap menggunakan container standar seperti awal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <StatsSection />
          <ServicesSection />
        </div>

        {/* 2. HANYA BAGIAN PROJECT: Full-Width dengan Gambar & Animasi Modern */}
        <div className="relative w-full py-16 overflow-hidden border-y border-blue-100">
          {/* Background Gambar Teknologi (Parallax / Fixed) */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              // Ganti URL ini dengan gambar lokal Anda jika ada, misal: url('/images/bg-lab.jpg')
              backgroundImage:
                "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')",
            }}
          />

          {/* Overlay Kaca Buram (Glassmorphism) agar kartu & teks tetap tajam */}
          <div className="absolute inset-0 bg-linear-to-br from-white/95 via-blue-50/90 to-indigo-50/95 backdrop-blur-[2px]" />

          {/* Animasi Cahaya Aurora Bergerak Lembut */}
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
          />

          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-24 -right-24 w-112.5 h-112.5 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"
          />

          {/* Konten ProjectsPreview tetap sejajar rapi di tengah (max-w-7xl) */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsPreview />
          </div>
        </div>

        {/* 3. Gallery Section kembali menggunakan container standar seperti awal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GallerySection />
        </div>
      </main>
    </>
  );
}
