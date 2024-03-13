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
            src="https://media.licdn.com/dms/image/D4E03AQFaWtmEL0epjw/profile-displayphoto-shrink_400_400/0/1698352725233?e=2147483647&v=beta&t=gOybFaJaNUb2ssFeK2N8Yi1xH6K-a2OfwQutMKwkOfg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Yanis Mechta
        </h1>
        <p className="z-10 text-lg text-white animate-fade-in my-8 text-center">
          Bienvenue sur mon portfolio ! Je suis passionné par le développement
          de projets innovants et l&apos;exploration de nouvelles technologies.
          Mon parcours m&apos;a permis de travailler sur une variété de projets,
          couvrant le développement web, d&apos;application, et bien
          d&apos;autres domaines technologiques. Chaque projet est une aventure
          où je cherche à repousser les limites de ce qui est techniquement
          possible. Découvrez mes réalisations et voyons ensemble comment nous
          pouvons transformer vos idées en réalité.
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
