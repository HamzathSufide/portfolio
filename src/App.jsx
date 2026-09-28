import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ProjectManagement from './components/ProjectManagement';
import PresentationVideos from './components/PresentationVideos';
import SalesBusiness from './components/SalesBusiness';
import Versatility from './components/Versatility';
import Awards from './components/Awards';
import EducationCertifications from './components/EducationCertifications';
import Languages from './components/Languages';
import BrandStatement from './components/BrandStatement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');

  const handleShowToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <ProjectManagement />
        <PresentationVideos />
        <SalesBusiness />
        <Versatility />
        <Awards />
        <EducationCertifications />
        <Languages />
        <BrandStatement />
        <Contact onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
