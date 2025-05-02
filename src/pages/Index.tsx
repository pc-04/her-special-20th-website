import React, { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import Timeline from "@/components/Timeline";
import PhotoGallery from "@/components/PhotoGallery";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import EntrySequence from "@/components/EntrySequence";
import BirthdayPhotoFrame from "@/components/BirthdayPhotoFrame";
import FutureTogether from "@/components/FutureTogether";
import { Cake, Music, Heart, Gift, VolumeX, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion"; 

const Index = () => {
  // Audio player state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(70);
  const [showVolumeControl, setShowVolumeControl] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Song selection options
  const songs = [
    {
      title: "Perfect - Ed Sheeran",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Replace with actual song URL
    },
    {
      title: "All of Me - John Legend", 
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" // Replace with actual song URL
    },
    {
      title: "Can't Help Falling in Love", 
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" // Replace with actual song URL
    }
  ];
  
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  
  // Entry sequence state
  const [showEntrySequence, setShowEntrySequence] = useState<boolean>(true);

  // Initialize audio element
  useEffect(() => {
    if (typeof Audio !== "undefined") {
      audioRef.current = new Audio(songs[currentSongIndex].url);
      audioRef.current.loop = true;
      audioRef.current.volume = volume / 100;
      
      // Setup ended event to handle song looping
      audioRef.current.addEventListener('ended', () => {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      });
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('ended', () => {});
      }
    };
  }, [currentSongIndex]);

  // Toggle background music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Change song
  const changeSong = (direction: 'next' | 'prev') => {
    let newIndex = currentSongIndex;
    
    if (direction === 'next') {
      newIndex = (currentSongIndex + 1) % songs.length;
    } else {
      newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    
    if (audioRef.current) {
      audioRef.current.pause();
      setCurrentSongIndex(newIndex);
      
      // We need to recreate the audio element with the new source
      audioRef.current = new Audio(songs[newIndex].url);
      audioRef.current.loop = true;
      audioRef.current.volume = volume / 100;
      
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };
  
  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
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

  // Animation variants for framer-motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Entry sequence */}
      {showEntrySequence && (
        <EntrySequence onComplete={handleEntryComplete} recipientName="[Her Name]" />
      )}

      {/* Navigation */}
      <Navigation />
      
      {/* Music control button group */}
      <div
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end"
      >
        {/* Volume slider (conditionally shown) */}
        {showVolumeControl && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-2 p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md flex items-center space-x-2"
          >
            <span className="text-xs font-medium text-birthday-purple w-24 whitespace-nowrap overflow-hidden text-ellipsis">
              {songs[currentSongIndex].title}
            </span>
            <div className="w-24">
              <Slider
                value={[volume]}
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
                className="w-full"
              />
            </div>
            <button
              onClick={() => changeSong('prev')}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous song"
            >
              ⏮️
            </button>
            <button
              onClick={() => changeSong('next')}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next song"
            >
              ⏭️
            </button>
          </motion.div>
        )}
        
        {/* Main music button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={toggleMusic}
            onMouseEnter={() => setShowVolumeControl(true)}
            className="rounded-full bg-white shadow-md hover:shadow-lg transition-all p-3"
            size="icon"
          >
            {isPlaying ? (
              <Volume2 className="w-6 h-6 text-birthday-rose" />
            ) : (
              <VolumeX className="w-6 h-6 text-gray-600" />
            )}
          </Button>
        </motion.div>
      </div>
      
      {/* Home section */}
      <motion.section 
        id="home" 
        className="min-h-screen relative flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-birthday-lavender/30 via-white to-birthday-pink/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <FloatingElements />
        
        <div className="text-center z-10 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-script text-birthday-rose mb-6"
            variants={fadeInUp}
          >
            Happy 20th Birthday, [Her Name]!
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Today we celebrate the amazing person you are and all the joy you bring to everyone around you. Here's to your special day and an incredible year ahead!
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            {/* Replace CountdownTimer with BirthdayPhotoFrame */}
            <BirthdayPhotoFrame />
          </motion.div>
          
          <motion.div 
            className="mt-12"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="bg-birthday-rose hover:bg-birthday-pink text-white"
              onClick={() => {
                document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Your Birthday Site
            </Button>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Our Story section */}
      <motion.section 
        id="our-story" 
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <Cake className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the day we met until today, every moment with you has been special. Here's a look back at some of our favorite memories together.
            </p>
          </motion.div>
          
          <Timeline events={timelineEvents} />
        </div>
      </motion.section>
      
      {/* Memories section */}
      <motion.section 
        id="memories" 
        className="py-20 px-4 bg-gradient-to-br from-birthday-lavender/20 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <Heart className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">Memories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of our favorite moments captured in photographs. Each one holds a special place in my heart.
            </p>
          </motion.div>
          
          <PhotoGallery photos={photos} />
        </div>
      </motion.section>
      
      {/* Future Together section - replacing Birthday Wishes section */}
      <motion.section 
        id="future" 
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <Gift className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">Our Future Together</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond this birthday, there are so many adventures, dreams and milestones waiting for us. Here's to our beautiful future together.
            </p>
          </motion.div>
          
          <FutureTogether />
        </div>
      </motion.section>
      
      {/* 20 Reasons section */}
      <motion.section 
        id="reasons" 
        className="py-20 px-4 bg-gradient-to-br from-white to-birthday-pink/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <Heart className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">20 Reasons Why I Love You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              One for each year of your amazing life. Click to reveal them one by one.
            </p>
          </motion.div>
          
          <ReasonsILoveYou reasons={reasons} />
          
          {/* Personal letter */}
          <motion.div 
            className="mt-20 max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-birthday-lavender/40"
            variants={fadeInUp}
          >
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
          </motion.div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 bg-white">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Made with ❤️ for your 20th birthday
        </motion.p>
        <motion.p 
          className="text-sm mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} - Your special day
        </motion.p>
        
        {/* Hidden Easter egg - to be replaced with something personal */}
        <motion.div 
          className="group relative inline-block mt-4 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs text-gray-400 transition-colors group-hover:text-birthday-purple">❤️</span>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-white shadow-lg rounded-md text-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <p className="text-birthday-rose">You found the hidden message! Remember that time we... (add a personal memory here)</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
