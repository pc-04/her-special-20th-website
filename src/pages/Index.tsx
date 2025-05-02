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
  const [showEntrySequence, setShowEntrySequence] = useState<boolean>(true);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

  // Handle entry sequence completion
  const handleEntryComplete = () => {
    setShowEntrySequence(false);
  };

  // Set the birthday date (customize this)
  const birthdayDate = new Date("2025-05-15T00:00:00");

  // Timeline data
  const timelineEvents = [
    {
      date: "May 1, 2022",
      title: "The Day We Met",
      description:
        "We met for the first time in the aakash classroom. I was studying Maths, and you asked me a doubt.",
      imageSrc: "/p13.png",
    },
    {
      date: "November 16, 2022",
      title: "Our First Date",
      description:
        "We went to that little cafe in Ranjit Avenue. You ordered a red sauce pasta(which I didn't like much) and we talked for hours and you were so shy.",
      imageSrc: "/p14.jpg",
    },
    {
      date: "November 16, 2022",
      title: "First Kiss",
      description:
        "I’ll never forget our first kiss — right as we were about to leave the fair, like the universe paused just for us in that perfect moment.",
      imageSrc: "/p12.jpg",
    },
    {
      date: "February 29, 2024",
      title: "Our first fest Together",
      description:
        "We weren’t just looking our best — we were glowing together, like we were made to be side by side.",
      imageSrc: "/p3.jpg",
    },
    {
      date: "February 8, 2025",
      title: "Our Trip",
      description:
        "I’ll never forget our trip to IITR — not just for the place, but for how deeply I cherished every moment by your side. Being with you made it unforgettable.",
      imageSrc: "/p8.jpg",
    },
  ];

  // Gallery photos
  const photos = [
    {
      id: 1,
      src: "/p6.jpg",
      caption: "Our first selfie together at the cafe",
      alt: "Couple selfie at the cafe",
    },
    {
      id: 2,
      src: "/p2.jpg",
      caption: "The first time you wore saree",
      alt: "Couple in the mountains",
    },
    {
      id: 3,
      src: "/p11.jpg",
      caption: "Our cutieee photo on my last birthday",
      alt: "Cooking together",
    },
    {
      id: 4,
      src: "/p5.jpg",
      caption:
        "Celebrating your birthday together was pure magic — just you and me",
      alt: "Beach day",
    },
    {
      id: 5,
      src: "/p10.jpg",
      caption: "When we shared that chocolate and popped the heart out",
      alt: "Movie night",
    },
    {
      id: 6,
      src: "/p1.jpg",
      caption: "Your freshers' party",
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Entry sequence */}
      {showEntrySequence && (
        <EntrySequence onComplete={handleEntryComplete} recipientName="Pooja" />
      )}

      {/* Navigation */}
      <Navigation />

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
            Happy 20th Birthday, Pooja!
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Today, I celebrate the most beautiful soul I know — you. Your
            presence fills my life with love, laughter, and meaning. You make
            every ordinary moment feel magical. Here’s to your special day, my
            love, and to a year filled with everything your heart desires. I’m
            so lucky to walk this journey with you
          </motion.p>

          <motion.div variants={fadeInUp}>
            {/* Replace CountdownTimer with BirthdayPhotoFrame */}
            <BirthdayPhotoFrame />
          </motion.div>

          <motion.div className="mt-12" variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-birthday-rose hover:bg-birthday-pink text-white"
              onClick={() => {
                document
                  .getElementById("our-story")
                  ?.scrollIntoView({ behavior: "smooth" });
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
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <Cake className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the day we met until today, every moment with you has been
              special. Here's a look back at some of our favorite memories
              together.
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
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <Heart className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">
              Memories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of our favorite moments captured in photographs. Each
              one holds a special place in my heart.
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
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <Gift className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">
              Our Future Together
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond this birthday, there are so many adventures, dreams and
              milestones waiting for us. Here's to our beautiful future
              together.
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
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <Heart className="w-10 h-10 mx-auto text-birthday-rose mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-birthday-purple mb-4">
              20 Reasons Why I Love You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              One for each year of your amazing life. Click to reveal them one
              by one.
            </p>
          </motion.div>

          <ReasonsILoveYou reasons={reasons} />

          {/* Personal letter */}
          <motion.div
            className="mt-20 max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-birthday-lavender/40"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-script text-birthday-rose mb-6 text-center">
              A Letter From My Heart
            </h3>
            <div className="prose prose-pink mx-auto">
              <p>Dearest Pooja,</p>

              <p>
                As you celebrate your 20th birthday, I wanted to take a moment
                to tell you just how much you mean to me. From the first day we
                met, you've brought so much joy and love into my life.
              </p>

              <p>
                Your kindness, your smile, your laugh – all these little things
                make every day brighter. You inspire me to be a better person
                just by being who you are.
              </p>

              <p>
                I'm so grateful for all the moments we've shared, both big and
                small, and I look forward to creating countless more memories
                together.
              </p>

              <p>
                Happy 20th birthday, my love. May this year bring you everything
                your heart desires. You deserve all the happiness in the world.
              </p>

              <p>With all my love,</p>
              <p>Pratham :)</p>
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
          <span className="text-xs text-gray-400 transition-colors group-hover:text-birthday-purple">
            ❤️
          </span>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-80 p-2 bg-white shadow-lg rounded-md text-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <p className="text-birthday-rose">
              You found the hidden message! Do you remember the time when we
              celebrated your birthday for the first time and ab aaj kitna kuch
              change hogya seriously kitna time hogya never expected ki we will
              get through so many years but we are still together, sometimes I
              can't even believe ki tu mere sath kese rehli😂 literally tuhi reh
              skti thi mere sath aur koi nhi seh pata, every year you give me so
              many reasons to love u more and why I want you more and more year
              by year. I'm really lucky to have you by my side and i don't want
              any other sundar ldki you have almost everything I want and I wish
              God gives you those extra 2 inches to make it perfect😂 I really
              love you pooo and hope this year brings you much more happiness
              than the earlier ones and we will make 10x more memories we hv
              made before.💋🫶
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
