
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on component mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "our-story", label: "Our Story" },
    { id: "memories", label: "Memories" },
    { id: "future", label: "Our Future" },
    { id: "reasons", label: "20 Reasons" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        isScrolled
          ? "py-2 bg-white/95 backdrop-blur-sm shadow-md"
          : "py-4 bg-transparent",
        className
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          className="font-script text-2xl text-birthday-rose hover:text-birthday-purple transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Poo's 20th
        </motion.a>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className={cn(
                  "text-sm font-medium relative",
                  activeSection === item.id
                    ? "text-birthday-rose"
                    : "text-gray-600 hover:text-birthday-purple"
                )}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-birthday-rose"
                    layoutId="activeSection"
                    style={{ width: "50%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="sm"
            className="border-birthday-pink text-birthday-rose"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </Button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
              >
                <div className="py-2 px-2">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ backgroundColor: "rgba(155, 135, 245, 0.1)" }}
                      className="rounded-md overflow-hidden"
                    >
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-sm my-1",
                          activeSection === item.id
                            ? "text-birthday-rose"
                            : "text-gray-600 hover:text-birthday-purple"
                        )}
                        onClick={() => scrollToSection(item.id)}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
