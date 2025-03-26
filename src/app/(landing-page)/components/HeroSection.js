"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (ev) => {
    const rect = ev.currentTarget.getBoundingClientRect();
    const x = ((ev.clientX - rect.left) / rect.width) * 100;
    const y = ((ev.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#1a1f2b]">
        <div className="absolute inset-0" 
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.03) 0%, transparent 25%)`
          }}
        />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2">
              Hello, I&apos;m
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Yurio Windiatmoko
            </span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl">
            Driving Innovation in AI & Data Engineering | Leading Product Development from Vision to Launch
            | Specializing in Scalable Cloud Solutions & Machine Learning Applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/about"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition-all duration-200 text-center"
            >
              About Me
            </Link>
            <button 
              className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/10 transition-all duration-200 text-center text-white font-semibold"
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="col-span-5 place-self-center relative">
          <div className="floating-element w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl transform rotate-6 opacity-20 blur-2xl animate-pulse"></div>
            <div className="relative bg-[#1a1f2b] rounded-2xl p-6 z-10 backdrop-blur-sm border border-white/10">
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-red-500" />
              <div className="absolute top-2 left-6 w-2 h-2 rounded-full bg-yellow-500" />
              <div className="absolute top-2 left-10 w-2 h-2 rounded-full bg-green-500" />
              <Image
                src="/images/yurio-hods.jpeg"
                alt="Yurio Windiatmoko"
                className="rounded-xl object-cover w-full h-full"
                width={450}
                height={450}
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
