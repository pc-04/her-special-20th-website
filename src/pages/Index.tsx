
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import CountdownTimer from "@/components/CountdownTimer";
import Timeline from "@/components/Timeline";
import PhotoGallery from "@/components/PhotoGallery";
import BirthdayWishes from "@/components/BirthdayWishes";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import EntrySequence from "@/components/EntrySequence";
import { Cake, Music, Heart, Gift, VolumeX, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Audio player state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio] = useState<HTMLAudioElement | null>(
    typeof Audio !== "undefined" ? new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3") : null
  );
  
  // Entry sequence state
  const [showEntrySequence, setShowEntrySequence] = useState<boolean>(true);

  // Toggle background music
  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.loop = true;
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle entry sequence completion
  const handleEntryComplete = () => {
    setShowEntrySequence(false);
  };

  // Set the birthday date (customize this)
  const birthdayDate = new Date("2025-05-15T00:00:00");

  // Timeline data
  const timelineEvents = [
    {
      date: "June 10, 2023",
      title: "The Day We Met",
      description: "We met for the first time at the university library. You were studying for your economics exam, and I asked to borrow a pen.",
      imageSrc: "/placeholder.svg",
    },
    {
      date: "June 25, 2023",
      title: "Our First Date",
      description: "We went to that little coffee shop by the lake. You ordered a caramel latte and we talked for hours until the staff had to ask us to leave because they were closing.",
      imageSrc: "/placeholder.svg",
    },
    {
      date: "July 15, 2023",
      title: "First Kiss",
      description: "Under the stars at the summer festival, with the fireworks lighting up the sky in the background.",
      imageSrc: "/placeholder.svg",
    },
    {
      date: "October 31, 2023",
      title: "Halloween Together",
      description: "We had matching costumes and won the 'best couple' prize at the party!",
      imageSrc: "/placeholder.svg",
    },
    {
      date: "December 25, 2023",
      title: "Our First Christmas",
      description: "I'll never forget your face when you opened that special gift I had been hiding for months.",
      imageSrc: "/placeholder.svg",
    },
  ];

  // Gallery photos
  const photos = [
    {
      id: 1,
      src: "/placeholder.svg",
      caption: "Our first selfie together at the park",
      alt: "Couple selfie at the park",
    },
    {
      id: 2,
      src: "/placeholder.svg",
      caption: "Weekend trip to the mountains",
      alt: "Couple in the mountains",
    },
    {
      id: 3,
      src: "/placeholder.svg",
      caption: "That time we tried cooking together and almost burned the kitchen",
      alt: "Cooking together",
    },
    {
      id: 4,
      src: "/placeholder.svg",
      caption: "Beach day with friends",
      alt: "Beach day",
    },
    {
      id: 5,
      src: "/placeholder.svg",
      caption: "Movie night at home",
      alt: "Movie night",
    },
    {
      id: 6,
      src: "/placeholder.svg",
      caption: "Your birthday last year",
      alt: "Birthday celebration",
    },
  ];

  // Birthday wishes
  const wishes = [
    {
      id: 1,
      name: "Emma",
      relationship: "Best Friend",
      message: "Happy 20th birthday! I can't believe we've been friends for over 10 years now. You're the most amazing person I know, and I'm so lucky to have you in my life. Here's to many more years of friendship and adventures!",
    },
    {
      id: 2,
      name: "Michael",
      relationship: "Brother",
      message: "Happy birthday sis! Even though I tease you all the time, you know I love you. Hope this year brings you everything you wish for!",
    },
    {
      id: 3,
      name: "Sarah",
      relationship: "College Friend",
      message: "Happy 20th birthday! College wouldn't be the same without you. Thanks for all the late-night study sessions and coffee runs. You're going to crush your twenties!",
    },
    {
      id: 4,
      name: "Mom & Dad",
      relationship: "Parents",
      message: "Our dearest daughter, watching you grow into the amazing young woman you are has been the greatest joy of our lives. Happy 20th birthday! We love you more than words can express.",
    },
  ];

  // 20 reasons data
  const reasons = [
    "Your smile lights up my entire world",
    "The way you listen and truly care about what I have to say",
    "Your incredible kindness to everyone you meet",
    "How you always know exactly what to say to make me feel better",
    "Your determination to achieve your goals",
    "The cute way you scrunch your nose when you're focused",
    "Our inside jokes that no one else understands",
    "How you never fail to make me laugh, even on my worst days",
    "The passion you have for the things you love",
    "Your amazing hugs that make everything feel right",
    "The way you remember tiny details about things I mention",
    "Your creativity and unique way of seeing the world",
    "How you push me to be a better person",
    "The sound of your laughter that I could listen to forever",
    "Your honesty, even when the truth is hard",
    "The way your eyes light up when you talk about your dreams",
    "Our late-night conversations that never seem to end",
    "How you make even ordinary days feel special",
    "The comfort I feel just being in your presence",
    "Simply because you're you, and that's all I could ever want",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Entry sequence */}
      {showEntrySequence && (
        <EntrySequence onComplete={handleEntryComplete} recipientName="[Her Name]" />
      )}

      {/* Navigation */}
      <Navigation />
      
      {/* Music control button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-birthday-rose" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-600" />
        )}
      </button>
      
      {/* Home section */}
      <section id="home" className="min-h-screen relative flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-birthday-lavender/30 via-white to-birthday-pink/20">
        <FloatingElements />
        
        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-script text-birthday-rose mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            Happy 20th Birthday, [Her Name]!
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Today we celebrate the amazing person you are and all the joy you bring to everyone around you. Here's to your special day and an incredible year ahead!
          </p>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
            <CountdownTimer targetDate={birthdayDate} />
          </div>
          
          <div className="mt-12 animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
            <Button
              size="lg"
              className="bg-birthday-rose hover:bg-birthday-pink text-white"
              onClick={() => {
                document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Your Birthday Site
            </Button>
          </div>
        </div>
      </section>
      
      {/* Our Story section */}
      <section id="our-story" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Cake className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the day we met until today, every moment with you has been special. Here's a look back at some of our favorite memories together.
            </p>
          </div>
          
          <Timeline events={timelineEvents} />
        </div>
      </section>
      
      {/* Memories section */}
      <section id="memories" className="py-20 px-4 bg-gradient-to-br from-birthday-lavender/20 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Heart className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">Memories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of our favorite moments captured in photographs. Each one holds a special place in my heart.
            </p>
          </div>
          
          <PhotoGallery photos={photos} />
        </div>
      </section>
      
      {/* Birthday Wishes section */}
      <section id="wishes" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Gift className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">Birthday Wishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everyone who loves you wanted to share their special messages for your 20th birthday.
            </p>
          </div>
          
          <BirthdayWishes wishes={wishes} />
        </div>
      </section>
      
      {/* 20 Reasons section */}
      <section id="reasons" className="py-20 px-4 bg-gradient-to-br from-white to-birthday-pink/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Heart className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">20 Reasons Why I Love You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              One for each year of your amazing life. Click to reveal them one by one.
            </p>
          </div>
          
          <ReasonsILoveYou reasons={reasons} />
          
          {/* Personal letter */}
          <div className="mt-20 max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-birthday-lavender/40">
            <h3 className="text-2xl font-script text-birthday-rose mb-6 text-center">A Letter From My Heart</h3>
            <div className="prose prose-pink mx-auto">
              <p>Dearest [Her Name],</p>
              
              <p>
                As you celebrate your 20th birthday, I wanted to take a moment to tell you just how much you mean to me. From the first day we met, you've brought so much joy and love into my life.
              </p>
              
              <p>
                Your kindness, your smile, your laugh – all these little things make every day brighter. You inspire me to be a better person just by being who you are.
              </p>
              
              <p>
                I'm so grateful for all the moments we've shared, both big and small, and I look forward to creating countless more memories together.
              </p>
              
              <p>
                Happy 20th birthday, my love. May this year bring you everything your heart desires. You deserve all the happiness in the world.
              </p>
              
              <p>With all my love,</p>
              <p>[Your Name]</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 bg-white">
        <p>Made with ❤️ for your 20th birthday</p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} - Your special day</p>
        
        {/* Hidden Easter egg - to be replaced with something personal */}
        <div className="group relative inline-block mt-4 cursor-pointer">
          <span className="text-xs text-gray-400 transition-colors group-hover:text-birthday-purple">❤️</span>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-white shadow-lg rounded-md text-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <p className="text-birthday-rose">You found the hidden message! Remember that time we... (add a personal memory here)</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
