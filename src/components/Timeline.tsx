import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Coffee,
  Heart,
  Sparkles,
  Star,
  Music,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ events, className }) => {
  // Animation variants
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const eventVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Function to get relevant icon based on event title
  const getEventIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("met"))
      return <Coffee className="w-5 h-5 text-birthday-rose" />;
    if (lowerTitle.includes("date"))
      return <Heart className="w-5 h-5 text-birthday-rose" />;
    if (lowerTitle.includes("kiss"))
      return (
        <Heart className="w-5 h-5 text-birthday-rose fill-birthday-rose/30" />
      );
    if (lowerTitle.includes("halloween"))
      return <Sparkles className="w-5 h-5 text-birthday-gold" />;
    if (lowerTitle.includes("christmas"))
      return <Star className="w-5 h-5 text-birthday-gold" />;
    if (lowerTitle.includes("photo") || lowerTitle.includes("picture"))
      return <Camera className="w-5 h-5 text-birthday-purple" />;
    if (lowerTitle.includes("concert") || lowerTitle.includes("music"))
      return <Music className="w-5 h-5 text-birthday-purple" />;

    // Default
    return <Calendar className="w-5 h-5 text-birthday-rose" />;
  };

  return (
    <div className={cn("relative", className)}>
      {/* Center line with animation */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-birthday-pink/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={lineVariants}
      ></motion.div>

      {events.map((event, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={eventVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={cn(
            "relative flex items-center mb-12",
            index % 2 === 0 ? "flex-row" : "flex-row-reverse",
            "md:mb-20"
          )}
        >
          {/* Content */}
          <motion.div
            className={cn(
              "relative w-full md:w-[45%] bg-white p-4 sm:p-6 rounded-lg shadow-md overflow-hidden",
              "hover:shadow-lg border border-birthday-lavender/30 group",
              { "md:text-right": index % 2 === 0 }
            )}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            {/* Hover image that covers full card */}
            <img
              src={event.imageSrc || "/placeholder.svg"}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
            />

            {/* Normal content - hidden on hover */}
            <div className="relative z-30 group-hover:opacity-0 transition-opacity duration-500">
              <div className="flex items-center mb-3">
                {getEventIcon(event.title)}
                <span className="text-sm text-gray-600 ml-2">{event.date}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-script mb-3 text-birthday-purple group-hover:text-birthday-rose transition-colors">
                {event.title}
              </h3>

              <div className="mb-4 max-h-60 overflow-hidden rounded-md">
                <img
                  src={event.imageSrc || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full object-cover max-h-60 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="text-gray-600">{event.description}</p>
            </div>
          </motion.div>

          {/* Center circle */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-birthday-rose shadow-md z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
