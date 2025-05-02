
import React from "react";
import { cn } from "@/lib/utils";
import { Heart, Sparkles, Confetti, Cake } from "lucide-react";

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {/* Hearts */}
      <Heart 
        className="absolute text-birthday-pink animate-float opacity-70" 
        style={{ top: '10%', left: '5%', animationDelay: '0.5s' }}
        size={24}
      />
      <Heart 
        className="absolute text-birthday-rose animate-float opacity-70" 
        style={{ top: '25%', left: '15%', animationDelay: '1.5s' }}
        size={18}
      />
      <Heart 
        className="absolute text-birthday-pink animate-float opacity-70" 
        style={{ top: '60%', left: '8%', animationDelay: '2s' }}
        size={32}
      />
      <Heart 
        className="absolute text-birthday-rose animate-float opacity-70" 
        style={{ top: '80%', left: '20%', animationDelay: '1s' }}
        size={22}
      />
      
      {/* Right side */}
      <Heart 
        className="absolute text-birthday-rose animate-float opacity-70" 
        style={{ top: '15%', right: '10%', animationDelay: '0.7s' }}
        size={20}
      />
      <Heart 
        className="absolute text-birthday-pink animate-float opacity-70" 
        style={{ top: '40%', right: '5%', animationDelay: '1.2s' }}
        size={28}
      />
      <Heart 
        className="absolute text-birthday-rose animate-float opacity-70" 
        style={{ top: '70%', right: '15%', animationDelay: '0.3s' }}
        size={16}
      />
      
      {/* Sparkles and Confetti */}
      <Sparkles 
        className="absolute text-birthday-gold animate-float opacity-80" 
        style={{ top: '20%', left: '30%', animationDelay: '0.4s' }}
        size={20}
      />
      <Sparkles 
        className="absolute text-birthday-gold animate-float opacity-80" 
        style={{ top: '65%', right: '30%', animationDelay: '1.8s' }}
        size={24}
      />
      <Confetti 
        className="absolute text-birthday-purple animate-float opacity-80" 
        style={{ top: '85%', left: '40%', animationDelay: '1s' }}
        size={22}
      />
      <Confetti 
        className="absolute text-birthday-purple animate-float opacity-80" 
        style={{ top: '30%', right: '20%', animationDelay: '0.2s' }}
        size={18}
      />
      <Cake 
        className="absolute text-birthday-lavender animate-float opacity-60" 
        style={{ top: '75%', right: '5%', animationDelay: '0.9s' }}
        size={26}
      />
    </div>
  );
};

export default FloatingElements;
