
import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BirthdayPhotoFrameProps {
  className?: string;
}

const BirthdayPhotoFrame: React.FC<BirthdayPhotoFrameProps> = ({
  className,
}) => {
  // Animation variants
  const frameVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  // Generate positions for hearts
  const heartPositions = Array.from({ length: 8 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
    size: 20 + Math.random() * 15,
    color: Math.random() > 0.5 ? "var(--birthday-rose-color)" : "var(--birthday-pink-color)"
  }));

  return (
    <div className={cn("relative text-center py-10", className)}>
      <div className="relative mx-auto max-w-2xl">
        {/* Photo frame with placeholder */}
        <motion.div
          className="relative border-8 border-birthday-lavender rounded-lg shadow-xl overflow-hidden 
                      bg-white p-2 mx-auto w-full max-w-xl aspect-[4/3]"
          whileHover="hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          variants={frameVariants}
        >
          {/* Placeholder image - Replace this with the actual image */}
          <motion.div 
            className="w-full h-full overflow-hidden rounded-sm bg-birthday-lavender/20"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/p9n.jpg"
              alt="Add your favorite photo here"
              className="w-full h-full object-cover"
              loading="lazy" 
            />
          </motion.div>

          {/* Frame decorative elements */}
          <motion.div 
            className="absolute -top-3 -right-3 w-8 h-8 bg-birthday-rose rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute -bottom-3 -left-3 w-8 h-8 bg-birthday-purple rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Special birthday message */}
        <motion.div 
          className="mt-8 max-w-2xl mx-auto overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <p className="typing-effect text-xl sm:text-2xl text-birthday-purple font-medium">
            Twenty years of your beautiful presence in this world, and I'm lucky
            enough to celebrate it with you!
          </p>
        </motion.div>

        {/* Floating/bouncing hearts */}
        {heartPositions.map((heart, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              top: heart.top,
              left: heart.left,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: heart.duration,
                delay: heart.delay,
                ease: "easeInOut"
              },
              opacity: {
                repeat: Infinity,
                duration: heart.duration * 0.8,
                delay: heart.delay,
                ease: "easeInOut"
              }
            }}
          >
            <Heart
              className="fill-current"
              style={{
                color: heart.color,
                width: `${heart.size}px`,
                height: `${heart.size}px`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayPhotoFrame;
