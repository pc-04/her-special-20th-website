
import React from "react";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface Wish {
  id: number;
  name: string;
  relationship: string;
  message: string;
}

interface BirthdayWishesProps {
  wishes: Wish[];
  className?: string;
}

const BirthdayWishes: React.FC<BirthdayWishesProps> = ({ wishes, className }) => {
  return (
    <div className={cn("space-y-6", className)}>
      {wishes.map((wish, index) => (
        <div
          key={wish.id}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-birthday-purple transition-all duration-300 hover:shadow-lg animate-fade-in opacity-0"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-birthday-lavender flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-birthday-purple" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="font-medium text-lg text-birthday-rose">{wish.name}</h4>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0">{wish.relationship}</span>
              </div>
              
              <p className="text-gray-700 italic">{wish.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BirthdayWishes;
