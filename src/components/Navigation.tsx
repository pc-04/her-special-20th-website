import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Update active section based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.5, // At least 50% of section in view
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        isScrolled
          ? "py-2 bg-white/90 backdrop-blur-sm shadow-md"
          : "py-4 bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="font-script text-2xl text-birthday-rose hover:text-birthday-purple transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Poo's 20th
        </a>

        <div className="hidden md:flex items-center space-x-1">
          {[
            { id: "home", label: "Home" },
            { id: "our-story", label: "Our Story" },
            { id: "memories", label: "Memories" },
            { id: "future", label: "Our Future" },
            { id: "reasons", label: "20 Reasons" },
          ].map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "text-sm font-medium",
                activeSection === item.id
                  ? "text-birthday-rose"
                  : "text-gray-600 hover:text-birthday-purple"
              )}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="sm"
            className="border-birthday-pink text-birthday-rose"
            onClick={() => {
              const mobileMenu = document.getElementById("mobile-menu");
              if (mobileMenu) {
                mobileMenu.classList.toggle("hidden");
              }
            }}
          >
            Menu
          </Button>

          <div
            id="mobile-menu"
            className="hidden absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 px-2"
          >
            {[
              { id: "home", label: "Home" },
              { id: "our-story", label: "Our Story" },
              { id: "memories", label: "Memories" },
              { id: "future", label: "Our Future" }, // Changed from "wishes" to "future"
              { id: "reasons", label: "20 Reasons" },
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-sm",
                  activeSection === item.id
                    ? "text-birthday-rose"
                    : "text-gray-600 hover:text-birthday-purple"
                )}
                onClick={() => {
                  scrollToSection(item.id);
                  const mobileMenu = document.getElementById("mobile-menu");
                  if (mobileMenu) {
                    mobileMenu.classList.add("hidden");
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
