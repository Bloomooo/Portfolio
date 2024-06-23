"use client";
import React, { useState } from "react";
import Particles from "./components/particles";
import Projet from "./projects/page";
import Competences from "./competence/page";
import Contact from "./contact/page";
import About from "./components/about";
import { BentoGridThirdDemo } from "./components/competenceiut";

const navigation = [
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Competence", href: "#competences" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black pr-[17px] lg:pr-[17px]"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        overflowY: "scroll",
      }}
    >
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="inline-block w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-4 animate-fade-in">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQFaWtmEL0epjw/profile-displayphoto-shrink_400_400/0/1698352725233?e=2147483647&v=beta&t=gOybFaJaNUb2ssFeK2N8Yi1xH6K-a2OfwQutMKwkOfg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Yanis Mechta
        </h1>
        <p className="z-10 text-lg text-white animate-fade-in my-8 text-center">
          Bienvenue sur mon portfolio ! <br />
          👋
        </p>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          <a href="#projects" className="text-zinc-500 hover:text-zinc-300"></a>
        </h2>
      </div>
      <div id="about" className="mt-8">
        <About />
      </div>
      <div id="competences" className="mt-8">
        <BentoGridThirdDemo />
      </div>
      <div id="competences" className="mt-8">
        <Competences />
      </div>

      <div id="projects" className="mb-8">
        <Projet />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          .slide-in {
            animation: slideIn 0.5s ease forwards;
          }
          .mt-8 {
            margin-top: 28vh; 
          }
          .mb-8{
            margin-top: -30vh;
          }
          @keyframes slideIn {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }

          // Added animations for the arrow
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.7;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }

          .arrow-animation {
            animation: pulse 1.5s infinite ease-in-out, bounce 2s infinite;
          }
        `}
      </style>
    </div>
  );
}
