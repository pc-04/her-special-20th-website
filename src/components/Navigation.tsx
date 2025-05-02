
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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll("section[id]");
      
      // Check if we've scrolled at all to update the navbar style
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Find current section
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        isScrolled ? "py-2 bg-white/90 backdrop-blur-sm shadow-md" : "py-4 bg-transparent",
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
          Her 20th
        </a>
        
        <div className="hidden md:flex items-center space-x-1">
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
