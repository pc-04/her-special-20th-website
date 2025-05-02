
import React, { useState, useEffect } from "react";
import { Heart, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import FloatingElements from "./FloatingElements";
import { cn } from "@/lib/utils";

interface EntrySequenceProps {
  onComplete: () => void;
  recipientName: string;
}

const EntrySequence: React.FC<EntrySequenceProps> = ({ onComplete, recipientName }) => {
  const [currentStep, setCurrentStep] = useState<"loading" | "first" | "second" | "final" | "completed">("loading");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Initialize audio
  useEffect(() => {
    // Use a romantic instrumental tune URL - replace with actual URL
    const audioElement = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3");
    audioElement.loop = true;
    audioElement.volume = 0.3;
    setAudio(audioElement);

    return () => {
      audioElement.pause();
      audioElement.src = "";
    };
  }, []);

  // Loading progress simulation
  useEffect(() => {
    if (currentStep !== "loading") return;

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentStep("first");
            // Start playing music when first overlay appears
            audio?.play().catch(err => console.log("Audio autoplay prevented:", err));
          }, 500);
          return 100;
        }
        return next;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [currentStep, audio]);

  // Handle Yes button click
  const handleYesClick = () => {
    setCurrentStep("final");
    setTimeout(() => {
      setCurrentStep("completed");
      onComplete();
    }, 3000);
  };

  // Handle No button hover/click to move it away
  const handleNoButtonInteraction = () => {
    // Generate random position within viewport boundaries
    const top = Math.random() * 60; // % from top
    const left = Math.random() * 60; // % from left
    setNoButtonPosition({ top, left });
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (!audio) return;
    
    if (isMuted) {
      audio.volume = 0.3;
    } else {
      audio.volume = 0;
    }
    
    setIsMuted(!isMuted);
  };

  // Skip intro
  const handleSkip = () => {
    setCurrentStep("completed");
    onComplete();
  };

  // Render different content based on current step
  const renderContent = () => {
    switch (currentStep) {
      case "loading":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-32 h-32 mb-8">
              <Heart
                className="absolute top-0 left-0 w-full h-full text-birthday-rose animate-heartbeat opacity-50"
                strokeWidth={1}
              />
              <Heart
                className="absolute top-0 left-0 w-full h-full text-birthday-pink"
                strokeWidth={1.5}
                style={{
                  clipPath: `inset(${100 - loadingProgress}% 0 0 0)`,
                  transition: "clip-path 0.3s ease-out",
                }}
              />
            </div>
            <p className="text-lg text-birthday-rose mb-4">Loading something special for you...</p>
            <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-birthday-rose rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        );

      case "first":
        return (
          <div className="flex flex-col items-center justify-center h-full animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-script text-birthday-rose mb-6 text-center">
              Happy 20th Birthday, {recipientName}!
            </h1>
            <div className="relative">
              <Sparkles className="absolute -top-5 -left-5 text-birthday-gold animate-float" size={20} />
              <Sparkles className="absolute -bottom-3 -right-3 text-birthday-gold animate-float" style={{ animationDelay: "0.5s" }} size={16} />
            </div>
            <FloatingElements className="opacity-30" />
          </div>
        );

      case "second":
        return (
          <div className="flex flex-col items-center justify-center h-full animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-script text-birthday-rose mb-12 text-center">
              Do you want to see what I made for you?
            </h2>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <Button
                size="lg"
                className="bg-birthday-rose hover:bg-birthday-rose/80 text-white text-lg px-10 py-6 rounded-full shadow-lg animate-pulse"
                onClick={handleYesClick}
              >
                Yes
              </Button>
              
              <Button
                size="lg"
                className="bg-white/70 hover:bg-white/90 text-birthday-purple text-lg px-10 py-6 rounded-full transition-all duration-300 shadow-md"
                style={{ 
                  position: "relative",
                  top: `${noButtonPosition.top}%`, 
                  left: `${noButtonPosition.left}%`
                }}
                onMouseEnter={handleNoButtonInteraction}
                onClick={handleNoButtonInteraction}
              >
                No
              </Button>
            </div>

            {noButtonPosition.top > 0 && (
              <p className="text-lg text-birthday-lavender mt-4 animate-fade-in">
                Pretty please?
              </p>
            )}
            
            <FloatingElements className="opacity-30" />
          </div>
        );

      case "final":
        return (
          <div className="flex flex-col items-center justify-center h-full animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-script text-birthday-rose mb-6 text-center typing-effect">
              I hope you love it, sweetheart
            </h2>
            <Heart className="text-birthday-rose animate-heartbeat" size={48} />
            <FloatingElements className="opacity-40" />
          </div>
        );
        
      default:
        return null;
    }
  };

  // Auto-advance from first to second step
  useEffect(() => {
    if (currentStep === "first") {
      const timer = setTimeout(() => {
        setCurrentStep("second");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // If completed, don't render anything
  if (currentStep === "completed") {
    return null;
  }

  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent
        className={cn(
          "max-w-full w-full h-full max-h-full p-0 sm:rounded-none border-0",
          "bg-gradient-to-br from-birthday-lavender/80 via-white/40 to-birthday-pink/80",
          "flex items-center justify-center overflow-hidden"
        )}
      >
        {/* Required DialogTitle for accessibility, visually hidden */}
        <DialogTitle className="sr-only">Birthday Entry Sequence</DialogTitle>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 z-50 text-birthday-rose hover:text-birthday-purple p-2 rounded-full bg-white/30 hover:bg-white/50 transition-all"
        >
          <span className="sr-only">Skip</span>
          <X size={18} />
        </button>
        
        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="absolute top-4 left-4 z-50 text-birthday-rose hover:text-birthday-purple p-2 rounded-full bg-white/30 hover:bg-white/50 transition-all"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          )}
        </button>
        
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};

export default EntrySequence;
