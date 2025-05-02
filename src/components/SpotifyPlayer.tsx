
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SpotifyPlayerProps {
  className?: string;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div
      className={cn(
        "fixed bottom-6 right-6 z-40 flex flex-col items-end",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md p-3 mb-3 max-w-full sm:max-w-sm"
          >
            <div className="relative">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/56zZ48jdyY2oDXHVnwg5Di?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Player"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "rounded-full bg-white shadow-lg hover:shadow-xl transition-all",
            isCollapsed ? "bg-birthday-rose text-white" : "bg-white"
          )}
          variant="outline"
          size="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-music"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default SpotifyPlayer;
