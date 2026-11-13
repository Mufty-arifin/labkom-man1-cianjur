export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-bold text-lg mb-3">
            LabKom MAN 1 Cianjur
          </h4>
          <p className="text-sm">
            Mewujudkan generasi siap digital dengan fasilitas komputasi modern
            dan terintegrasi.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-3">Navigasi Cepat</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#jadwal" className="hover:text-white transition">
                Jadwal Penggunaan
              </a>
            </li>
            <li>
              <a href="#tatatertib" className="hover:text-white transition">
                Tata Tertib Lab
              </a>
            </li>
            <li>
              <a href="#pinjam" className="hover:text-white transition">
                Prosedur Peminjaman
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-3">Kontak & Lokasi</h4>
          <p className="text-sm">MAN 1 Cianjur</p>
          <p className="text-sm mt-1">Email: labkom@sekolah.sch.id</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-gray-800 text-center text-xs">
        © {new Date().getFullYear()} Laboratorium Komputer MAN 1 Cianjur. All
        rights reserved.
      </div>
    </footer>
  );
}
