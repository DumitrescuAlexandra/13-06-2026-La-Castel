import { useEffect, useState } from "react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isVisible: boolean;
}

const sections = [
  { id: "hero", label: "Eveniment" },
  { id: "about", label: "Ce? Cine? Unde?" },
  { id: "rsvp", label: "RSVP" },
  { id: "gallery", label: "Galerie" },
];

export function Navigation({
  activeSection,
  onNavigate,
  isVisible,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ul className="flex justify-center items-center gap-8 md:gap-12">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onNavigate(section.id)}
                className={`text-sm md:text-base font-medium transition-all duration-200 hover:scale-105 ${
                  activeSection === section.id
                    ? "text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1"
                    : "text-gray-700 hover:text-[#D4AF37]"
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
