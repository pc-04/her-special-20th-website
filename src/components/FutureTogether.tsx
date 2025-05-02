
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Rocket, Gift, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FutureTogetherProps {
  className?: string;
}

// Types for our dreams/future plans
interface DreamItem {
  id: string;
  title: string;
  description: string;
  category: "travel" | "adventure" | "milestone";
  icon: "map-pin" | "rocket" | "calendar" | "gift" | "star";
}

const FutureTogether: React.FC<FutureTogetherProps> = ({ className }) => {
  // Initial dreams data
  const [dreams, setDreams] = useState<DreamItem[]>([
    {
      id: "1",
      title: "Paris Weekend",
      description: "Spend a romantic weekend in Paris, visiting the Eiffel Tower and having dinner along the Seine.",
      category: "travel",
      icon: "map-pin",
    },
    {
      id: "2",
      title: "Learn Salsa Dancing",
      description: "Take salsa dancing lessons together and show off at your friend's wedding.",
      category: "adventure",
      icon: "rocket",
    },
    {
      id: "3",
      title: "Graduation Day",
      description: "Celebrate your graduation and the beginning of your career journey.",
      category: "milestone",
      icon: "calendar",
    },
    {
      id: "4",
      title: "Northern Lights Trip",
      description: "Travel to Norway and witness the magical Northern Lights together while staying in a glass igloo.",
      category: "travel",
      icon: "map-pin",
    },
    {
      id: "5",
      title: "Cooking Class",
      description: "Take a cooking class to learn how to make authentic Italian pasta from scratch.",
      category: "adventure",
      icon: "rocket",
    },
    {
      id: "6",
      title: "First Home",
      description: "Buy our first home together and make it our own.",
      category: "milestone",
      icon: "calendar",
    },
  ]);

  // New dream form state
  const [newDream, setNewDream] = useState("");
  const [newCategory, setNewCategory] = useState<"travel" | "adventure" | "milestone">("travel");
  const [expandedDreamId, setExpandedDreamId] = useState<string | null>(null);
  
  // Add new dream
  const handleAddDream = () => {
    if (!newDream.trim()) {
      toast({
        title: "Please enter a dream",
        description: "Your dream can't be empty!",
        variant: "destructive",
      });
      return;
    }
    
    const newDreamItem: DreamItem = {
      id: `dream-${Date.now()}`,
      title: newDream,
      description: "Click to add more details to your dream!",
      category: newCategory,
      icon: newCategory === "travel" 
        ? "map-pin" 
        : newCategory === "adventure" 
          ? "rocket" 
          : "calendar",
    };
    
    setDreams([...dreams, newDreamItem]);
    setNewDream("");
    
    toast({
      title: "Dream Added!",
      description: "Your dream has been added to our future together.",
    });
  };

  // Update dream description
  const updateDreamDescription = (id: string, description: string) => {
    setDreams(
      dreams.map((dream) =>
        dream.id === id ? { ...dream, description } : dream
      )
    );
  };

  // Get icon component based on icon name
  const getIcon = (icon: string) => {
    switch (icon) {
      case "map-pin":
        return <MapPin className="h-5 w-5" />;
      case "rocket":
        return <Rocket className="h-5 w-5" />;
      case "calendar":
        return <Calendar className="h-5 w-5" />;
      case "gift":
        return <Gift className="h-5 w-5" />;
      default:
        return <Star className="h-5 w-5" />;
    }
  };

  // Filter dreams by category
  const travelDreams = dreams.filter((dream) => dream.category === "travel");
  const adventureDreams = dreams.filter((dream) => dream.category === "adventure");
  const milestoneDreams = dreams.filter((dream) => dream.category === "milestone");

  return (
    <div className={cn("max-w-6xl mx-auto px-4", className)}>
      {/* Dream categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Travel category */}
        <div className="bg-gradient-to-br from-white to-birthday-lavender/20 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-birthday-lavender/30 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-birthday-purple" />
            </div>
            <h3 className="text-xl font-script text-birthday-purple">Places We'll Visit</h3>
          </div>
          <div className="space-y-3">
            {travelDreams.map((dream) => (
              <Collapsible 
                key={dream.id}
                open={expandedDreamId === dream.id}
                onOpenChange={() => setExpandedDreamId(expandedDreamId === dream.id ? null : dream.id)}
              >
                <CollapsibleTrigger asChild>
                  <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow cursor-pointer flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-birthday-pink/10">
                      {getIcon(dream.icon)}
                    </div>
                    <span className="font-medium text-gray-800">{dream.title}</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-3 text-gray-600 bg-white/80 rounded-b-lg border-t border-gray-100">
                  <textarea
                    className="w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-birthday-purple"
                    value={dream.description}
                    rows={3}
                    onChange={(e) => updateDreamDescription(dream.id, e.target.value)}
                    placeholder="Add more details to your dream..."
                  />
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
        
        {/* Adventures category */}
        <div className="bg-gradient-to-br from-white to-birthday-pink/20 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-birthday-pink/30 p-2 rounded-full">
              <Rocket className="h-5 w-5 text-birthday-rose" />
            </div>
            <h3 className="text-xl font-script text-birthday-rose">Adventures We'll Have</h3>
          </div>
          <div className="space-y-3">
            {adventureDreams.map((dream) => (
              <Collapsible 
                key={dream.id}
                open={expandedDreamId === dream.id}
                onOpenChange={() => setExpandedDreamId(expandedDreamId === dream.id ? null : dream.id)}
              >
                <CollapsibleTrigger asChild>
                  <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow cursor-pointer flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-birthday-rose/10">
                      {getIcon(dream.icon)}
                    </div>
                    <span className="font-medium text-gray-800">{dream.title}</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-3 text-gray-600 bg-white/80 rounded-b-lg border-t border-gray-100">
                  <textarea
                    className="w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-birthday-rose"
                    value={dream.description}
                    rows={3}
                    onChange={(e) => updateDreamDescription(dream.id, e.target.value)}
                    placeholder="Add more details to your dream..."
                  />
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
        
        {/* Milestones category */}
        <div className="bg-gradient-to-br from-white to-birthday-pink/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-birthday-pink/20 p-2 rounded-full">
              <Calendar className="h-5 w-5 text-birthday-purple" />
            </div>
            <h3 className="text-xl font-script text-birthday-purple">Milestones We'll Celebrate</h3>
          </div>
          <div className="space-y-3">
            {milestoneDreams.map((dream) => (
              <Collapsible 
                key={dream.id}
                open={expandedDreamId === dream.id}
                onOpenChange={() => setExpandedDreamId(expandedDreamId === dream.id ? null : dream.id)}
              >
                <CollapsibleTrigger asChild>
                  <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow cursor-pointer flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-birthday-purple/10">
                      {getIcon(dream.icon)}
                    </div>
                    <span className="font-medium text-gray-800">{dream.title}</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-3 text-gray-600 bg-white/80 rounded-b-lg border-t border-gray-100">
                  <textarea
                    className="w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-birthday-purple"
                    value={dream.description}
                    rows={3}
                    onChange={(e) => updateDreamDescription(dream.id, e.target.value)}
                    placeholder="Add more details to your dream..."
                  />
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add new dream form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-xl font-script text-birthday-rose mb-4">Add Your Own Dreams</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="text"
            placeholder="Enter a new dream for our future..."
            value={newDream}
            onChange={(e) => setNewDream(e.target.value)}
            className="flex-grow"
          />
          <div className="flex gap-2">
            <select
              className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-birthday-purple"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value as any)}
            >
              <option value="travel">Travel</option>
              <option value="adventure">Adventure</option>
              <option value="milestone">Milestone</option>
            </select>
            <Button 
              onClick={handleAddDream}
              className="whitespace-nowrap bg-birthday-rose hover:bg-birthday-pink"
            >
              Add Dream
            </Button>
          </div>
        </div>
      </div>
      
      {/* Dream visualization */}
      <div className="relative p-6 rounded-lg overflow-hidden bg-gradient-to-br from-birthday-lavender/20 via-white to-birthday-pink/20 shadow-lg">
        <h3 className="text-2xl font-script text-center text-birthday-purple mb-6">Our Dream Map</h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {dreams.map((dream) => (
            <div
              key={dream.id}
              className="relative group"
              onClick={() => setExpandedDreamId(expandedDreamId === dream.id ? null : dream.id)}
            >
              <div className={cn(
                "w-32 h-32 sm:w-40 sm:h-40 rounded-lg flex flex-col items-center justify-center p-3 cursor-pointer transition-all transform hover:scale-105 shadow-md",
                dream.category === "travel" ? "bg-gradient-to-br from-birthday-lavender/50 to-birthday-lavender/20" :
                dream.category === "adventure" ? "bg-gradient-to-br from-birthday-rose/50 to-birthday-pink/20" :
                "bg-gradient-to-br from-birthday-purple/50 to-birthday-purple/20"
              )}>
                <div className="p-2 rounded-full bg-white/80 mb-3">
                  {getIcon(dream.icon)}
                </div>
                <p className="text-sm text-center font-medium text-white/90 drop-shadow-md">{dream.title}</p>
              </div>
              
              {/* Popup with description */}
              <div className={cn(
                "absolute top-full left-1/2 transform -translate-x-1/2 w-64 p-4 bg-white rounded-lg shadow-lg z-10 transition-all mt-2",
                expandedDreamId === dream.id ? "opacity-100" : "opacity-0 invisible pointer-events-none"
              )}>
                <p className="text-sm text-gray-700">{dream.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-16 -right-16 opacity-10 w-64 h-64">
          <Star className="w-full h-full text-birthday-purple" />
        </div>
      </div>
    </div>
  );
};

export default FutureTogether;
