import { Routes, Route } from "react-router-dom";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="min-h-screen bg-theme text-theme transition-colors duration-300">
      {/* Global Navbar */}
      <Navbar />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Projects */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Resume */}
        <Route path="/resume" element={<ResumePage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
