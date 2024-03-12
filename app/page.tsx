import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Projet from "./projects/page";
import Competences from "./competence/page";
import Contact from "./contact/page";

const navigation = [
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
          {navigation.map((item) => (
            <a
              key={item.href}
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
            src="data:image/jpeg;base64,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"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Yanis Mechta
        </h1>
        <p className="z-10 text-lg text-white animate-fade-in my-8 text-center">
          Bienvenue sur mon portfolio ! Je suis passionné par le développement
          de projets innovants et l'exploration de nouvelles technologies. Mon
          parcours m'a permis de travailler sur une variété de projets, couvrant
          le développement web, d'application, et bien d'autres domaines
          technologiques. Chaque projet est une aventure où je cherche à
          repousser les limites de ce qui est techniquement possible. Découvrez
          mes réalisations et voyons ensemble comment nous pouvons transformer
          vos idées en réalité.
        </p>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          <a href="#projects" className="text-zinc-500 hover:text-zinc-300"></a>
        </h2>
      </div>
      <div id="competences" className="mb-8">
        <Competences />
      </div>
      <div id="projects" className="mt-0">
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
        `}
      </style>
    </div>
  );
}
