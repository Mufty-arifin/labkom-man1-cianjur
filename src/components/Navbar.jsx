import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menutup menu saat link diklik (opsional tapi disarankan)
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-2xl">💻</span>
          <span className="font-bold text-xl tracking-wide">
            LabKom MAN 1 Cianjur
          </span>
        </Link>

        {/* Menu untuk Desktop (Layar Sedang ke Atas) */}
        <div className="hidden md:flex space-x-6 font-medium items-center">
          <Link to="/" className="transition duration-150 hover:text-blue-200">
            Beranda
          </Link>
          <Link
            to="/tata-tertib"
            className="transition duration-150 hover:text-blue-200"
          >
            Tata Tertib
          </Link>
          <Link
            to="/galeri"
            className="transition duration-150 hover:text-blue-200"
          >
            Galeri
          </Link>
          <Link
            to="/projek"
            className="transition duration-150 hover:text-blue-200"
          >
            Projek Siswa
          </Link>
        </div>

        {/* Tombol Pinjam Lab & Tombol Hamburger (Mobile) */}
        <div className="flex items-center space-x-3">
          <Link
            to="/login"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm shadow transition inline-block text-center"
          >
            Pinjam Lab
          </Link>

          {/* Tombol Hamburger (Hanya tampil di Mobile / md:hidden) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-blue-600 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Icon Close (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icon Hamburger (Garis 3)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Dropdown untuk Mobile (Muncul jika isOpen bernilai true) */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-600 px-4 pt-3 pb-5 space-y-3 font-medium shadow-inner">
          <Link
            to="/"
            onClick={handleCloseMenu}
            className="block px-3 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Beranda
          </Link>
          <Link
            to="/tata-tertib"
            onClick={handleCloseMenu}
            className="block px-3 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Tata Tertib
          </Link>
          <Link
            to="/galeri"
            onClick={handleCloseMenu}
            className="block px-3 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Galeri
          </Link>
          <Link
            to="/projek"
            onClick={handleCloseMenu}
            className="block px-3 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Projek Siswa
          </Link>
        </div>
      )}
    </nav>
  );
}
