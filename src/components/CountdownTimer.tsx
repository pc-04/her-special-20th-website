
import React from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

// This is now a placeholder component since we've replaced it with Birthday20Display
const CountdownTimer: React.FC<CountdownTimerProps> = ({ className }) => {
  return <div className={cn(className)}></div>;
};

export default CountdownTimer;
