import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TataTertibPage from "./pages/TataTertibPage";
import GalleryPage from "./pages/GalleryPage";
import ProjectsPage from "./pages/ProjectsPage"; // <-- Import halaman daftar projek
import ProjectDetailPage from "./pages/ProjectDetailPage"; // <-- Import halaman detail projek
import LoginPage from "./pages/loginPage"; // <-- Import halaman login

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tata-tertib" element={<TataTertibPage />} />
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="/projek" element={<ProjectsPage />} />{" "}
        <Route path="/projek/:id" element={<ProjectDetailPage />} />{" "}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
