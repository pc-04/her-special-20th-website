import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface BirthdayPhotoFrameProps {
  className?: string;
}

const BirthdayPhotoFrame: React.FC<BirthdayPhotoFrameProps> = ({
  className,
}) => {
  return (
    <div className={cn("relative text-center py-10", className)}>
      <div className="relative mx-auto max-w-2xl">
        {/* Photo frame with placeholder */}
        <div
          className="relative border-8 border-birthday-lavender rounded-lg shadow-xl overflow-hidden 
                      bg-white p-2 mx-auto w-full max-w-xl aspect-[4/3] transition-all duration-500 
                      hover:shadow-2xl hover:scale-[1.02]"
        >
          {/* Placeholder image - Replace this with the actual image */}
          <div className="w-full h-full overflow-hidden rounded-sm bg-birthday-lavender/20">
            <img
              src="/p9n.jpg"
              alt="Add your favorite photo here"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Frame decorative elements */}
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-birthday-rose rounded-full"></div>
          <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-birthday-purple rounded-full"></div>
        </div>

        {/* Special birthday message */}
        <div className="mt-8 max-w-2xl mx-auto overflow-hidden">
          <p className="typing-effect text-xl sm:text-2xl text-birthday-purple font-medium">
            Twenty years of your beautiful presence in this world, and I'm lucky
            enough to celebrate it with you!
          </p>
        </div>

        {/* Floating/bouncing hearts */}
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute fill-current animate-float opacity-70 transition-colors duration-3000`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color:
                i % 2 === 0
                  ? "var(--birthday-rose-color, #FF69B4)"
                  : "var(--birthday-pink-color, #FFB6C1)",
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
              width: `${20 + Math.random() * 15}px`,
              height: `${20 + Math.random() * 15}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BirthdayPhotoFrame;
