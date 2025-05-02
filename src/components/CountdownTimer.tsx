
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        // Birthday has arrived!
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        // Calculate time remaining
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Check if birthday has passed
  const birthdayPassed = new Date() > targetDate;

  return (
    <div className={cn("text-center", className)}>
      <h3 className="text-2xl font-script mb-4 text-birthday-rose">
        {birthdayPassed ? "Happy Birthday!" : "Countdown to Your Special Day"}
      </h3>
      
      {birthdayPassed ? (
        <div className="text-xl sm:text-2xl font-medium animate-heartbeat text-birthday-purple">
          Today is your day! 🎉
        </div>
      ) : (
        <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg bg-gradient-to-br from-birthday-lavender to-birthday-purple flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
            </div>
            <span className="mt-2 text-sm text-gray-600">Days</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg bg-gradient-to-br from-birthday-lavender to-birthday-purple flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
            </div>
            <span className="mt-2 text-sm text-gray-600">Hours</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg bg-gradient-to-br from-birthday-lavender to-birthday-purple flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
            </div>
            <span className="mt-2 text-sm text-gray-600">Minutes</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg bg-gradient-to-br from-birthday-lavender to-birthday-purple flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
            <span className="mt-2 text-sm text-gray-600">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
