"use client";

import Link from "next/link";
import { Card } from "../components/card";
import { useEffect, useState } from "react";
import { Project } from "../interface/projets";

export default function Projet() {
  const [listeProjet, setListeProjet] = useState<Project[]>([]);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      if (Array.isArray(data)) {
        setListeProjet(data);
        setDisplayedProjects(data.slice(0, 3));
      } else {
        console.error("Received data is not an array:", data);
        setListeProjet([]);
      }
    };

    fetchProjects();
  }, []);

  const handlePreviousClick = () => {
    setDisplayedProjects((prevProjects) => {
      let newIndex = listeProjet.findIndex(
        (project) => project.id === prevProjects[0].id
      );
      newIndex = newIndex - 1 < 0 ? listeProjet.length - 1 : newIndex - 1;
      const newProjects = [];
      for (let i = 0; i < 3; i++) {
        newProjects.push(listeProjet[(newIndex + i) % listeProjet.length]);
      }
      return newProjects;
    });
  };

  const handleNextClick = () => {
    setDisplayedProjects((prevProjects) => {
      let newIndex = listeProjet.findIndex(
        (project) => project.id === prevProjects[0].id
      );
      newIndex = (newIndex + 1) % listeProjet.length;
      const newProjects = [];
      for (let i = 0; i < 3; i++) {
        newProjects.push(listeProjet[(newIndex + i) % listeProjet.length]);
      }
      return newProjects;
    });
  };

  const PreviousIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const NextIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto relative">
      <button
        onClick={handlePreviousClick}
        className="absolute left-0 z-10 flex items-center justify-center h-12 w-12 bg-gradient-to-r bg-black text-white rounded-full shadow-lg cursor-pointer transform -translate-y-1/2 top-1/2 transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-white hover:scale-110 hover:text-black"
        aria-label="Previous Project"
      >
        <PreviousIcon />
      </button>
      <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16 transition-opacity duration-500">
        {displayedProjects.map((project, index) => (
          <Card key={index}>
            <Link href={project.lien || "#"} passHref legacyBehavior>
              <a
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {project.name}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {project.description}
                  </span>
                </div>
              </a>
            </Link>
          </Card>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        className="absolute right-0 z-10 flex items-center justify-center h-12 w-12 bg-gradient-to-l bg-black text-white rounded-full shadow-lg cursor-pointer transform -translate-y-1/2 top-1/2 transition-all duration-300 hover:bg-gradient-to-l hover:from-white hover:to-white hover:scale-110 hover:text-black"
        aria-label="Next Project"
      >
        <NextIcon />
      </button>
    </div>
  );
}
