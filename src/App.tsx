import "./App.css";
import { useState, useEffect } from "react";
import { Navigation } from "./components/NavigationFigma";
import About from "./pages/About";
import UploadAndGallery from "./pages/UploadAndGallery";
import { AboutEvent } from "./pages/EventDescription";
import Form from "./pages/Form";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setShowNavigation(window.scrollY > heroBottom - 100);
      }

      // Determine active section
      const sections = ["gallery", "rsvp", "about", "hero"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // If at the top, set to hero
      if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToAbout = () => {
    scrollToSection("about");
  };

  return (
    <div className="relative">
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isVisible={showNavigation}
      />

      <About onScrollToAbout={handleScrollToAbout} />
      <AboutEvent />
      <Form />
      <UploadAndGallery />
    </div>
  );
}
