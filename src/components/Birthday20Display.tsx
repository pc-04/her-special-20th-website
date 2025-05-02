
import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Birthday20DisplayProps {
  className?: string;
}

const Birthday20Display: React.FC<Birthday20DisplayProps> = ({ className }) => {
  return (
    <div className={cn("relative text-center py-10", className)}>
      <div className="relative inline-block">
        {/* Big "20" Display */}
        <div className="text-[10rem] sm:text-[14rem] md:text-[18rem] leading-none font-script font-bold bg-clip-text text-transparent bg-gradient-to-r from-birthday-rose via-birthday-purple to-birthday-pink inline-block">
          20
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 text-birthday-pink animate-bounce">
          <Sparkles className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 text-birthday-rose animate-pulse">
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 fill-birthday-rose/30" />
        </div>
        
        {/* Sparkle animation around "20" */}
        <div className="absolute -inset-4 bg-white/5 rounded-full blur-lg"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-birthday-pink rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${1 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Special birthday message */}
      <div className="mt-6 max-w-2xl mx-auto overflow-hidden">
        <p className="typing-effect text-xl sm:text-2xl text-birthday-purple font-medium">
          Twenty years of your beautiful presence in this world, and I'm lucky enough to celebrate it with you!
        </p>
      </div>
    </div>
  );
};

export default Birthday20Display;
