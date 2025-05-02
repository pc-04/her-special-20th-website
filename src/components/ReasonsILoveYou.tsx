
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReasonsILoveYouProps {
  reasons: string[];
  className?: string;
}

const ReasonsILoveYou: React.FC<ReasonsILoveYouProps> = ({ reasons, className }) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [showAllReasons, setShowAllReasons] = useState<boolean>(false);

  const revealNextReason = () => {
    if (visibleCount < reasons.length) {
      setVisibleCount(visibleCount + 1);
    }
  };

  const toggleShowAll = () => {
    setShowAllReasons(!showAllReasons);
    if (!showAllReasons) {
      setVisibleCount(reasons.length);
    }
  };

  return (
    <div className={cn("text-center", className)}>
      <div className="mb-8">
        <Button
          onClick={revealNextReason}
          disabled={visibleCount >= reasons.length}
          className="bg-birthday-rose hover:bg-birthday-pink text-white"
        >
          Reveal Next Reason
        </Button>
        
        <Button
          onClick={toggleShowAll}
          variant="outline"
          className="ml-4 border-birthday-pink text-birthday-rose hover:bg-birthday-lavender/20"
        >
          {showAllReasons ? "Hide All" : "Show All"}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={cn(
              "p-4 rounded-lg border border-birthday-lavender bg-white transition-all duration-500",
              (index < visibleCount || showAllReasons)
                ? "opacity-100 transform scale-100"
                : "opacity-0 transform scale-95 pointer-events-none absolute",
              "flex flex-col items-center"
            )}
            style={{ 
              transitionDelay: `${index * 0.1}s`,
            }}
          >
            <div className="w-8 h-8 bg-birthday-lavender rounded-full flex items-center justify-center mb-3">
              <Heart className="w-4 h-4 text-birthday-rose" />
            </div>
            
            <span className="text-lg font-medium text-birthday-purple mb-2">#{index + 1}</span>
            <p className="text-gray-700">{reason}</p>
          </div>
        ))}
      </div>
      
      {visibleCount === reasons.length && !showAllReasons && (
        <div className="mt-8 animate-heartbeat text-birthday-rose font-script text-xl">
          And countless more reasons I love you! ❤️
        </div>
      )}
    </div>
  );
};

export default ReasonsILoveYou;
