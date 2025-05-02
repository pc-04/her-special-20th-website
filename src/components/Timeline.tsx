
import React from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

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
  return (
    <div className={cn("relative", className)}>
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-birthday-pink/40"></div>
      
      {events.map((event, index) => (
        <div 
          key={index}
          className={cn(
            "relative flex items-center mb-12",
            index % 2 === 0 ? "flex-row" : "flex-row-reverse",
            "md:mb-20"
          )}
        >
          {/* Content */}
          <div className={cn(
            "w-full md:w-[45%] bg-white p-4 sm:p-6 rounded-lg shadow-md transform transition-all duration-500",
            "hover:shadow-lg border border-birthday-lavender/30",
            "group animate-fade-in opacity-0",
            { "md:text-right": index % 2 === 0 }
          )}
            style={{ animationDelay: `${index * 0.2}s` }}  
          >
            <div className="flex items-center mb-3">
              <Calendar className="w-5 h-5 text-birthday-rose mr-2" />
              <span className="text-sm text-gray-600">{event.date}</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-script mb-3 text-birthday-purple group-hover:text-birthday-rose transition-colors">
              {event.title}
            </h3>
            
            <div className="mb-4 max-h-40 overflow-hidden rounded-md">
              <img 
                src={event.imageSrc || "/placeholder.svg"} 
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <p className="text-gray-600">{event.description}</p>
          </div>
          
          {/* Center circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-birthday-rose shadow-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
