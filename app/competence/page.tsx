"use client";

import React, { useEffect, useState } from "react";
import { Competence } from "../interface/competence";
import { InfiniteMovingCards } from "../components/infinite-moving-cards";
import { CardsGrid } from "../components/cardgrid";
import { BentoGridThirdDemo } from "../components/competenceiut";

const navigation = [
  { name: "Langage", href: "Langage" },
  { name: "Framework", href: "Framework" },
  { name: "Base de Données", href: "Base de Données" },
  { name: "Autre", href: "Autre" },
];

export default function Competences() {
  const [listeCompetence, setListeCompetence] = useState<Competence[]>([]);
  const [selectedType, setSelectedType] = useState("Langage");

  const filteredCompetences = listeCompetence.filter(
    (competence) => competence.type === selectedType
  );

  useEffect(() => {
    const fetchCompetences = async () => {
      try {
        const response = await fetch("/api/competence");
        const data = await response.json();
        data.sort((a: Competence, b: Competence) => {
          if (a.maitrise === "Avancé" && b.maitrise !== "Avancé") {
            return -1;
          }
          if (a.maitrise !== "Avancé" && b.maitrise === "Avancé") {
            return 1;
          }
          if (a.maitrise === "Intermédiaire" && b.maitrise === "Débutant") {
            return -1;
          }
          if (a.maitrise === "Débutant" && b.maitrise === "Intermédiaire") {
            return 1;
          }
          return 0;
        });
        if (Array.isArray(data)) {
          setListeCompetence(data);
        } else {
          setListeCompetence([]);
        }
      } catch (error) {
        console.error("Error fetching competences:", error);
      }
    };

    fetchCompetences();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <nav className="w-full px-4 my-8 animate-fade-in md:px-0">
        <ul className="flex items-center justify-center gap-2 md:gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => setSelectedType(item.name)}
                className={`text-xs md:text-sm duration-500 ${
                  selectedType === item.name ? "text-zinc-500" : "text-gray-500"
                } hover:text-zinc-300`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="lex flex-wrap justify-center gap-4 px-4 sm:px-6 lg:px-8">
        <CardsGrid
          competence={selectedType ? filteredCompetences : listeCompetence}
        />
      </div>
      <div className="container flex items-center justify-center min-h-screen w-full px-4 md:px-0">
        <div className="w-full md:w-[90%]">
          <InfiniteMovingCards
            className="mb-8"
            items={listeCompetence.map((competence) => ({
              quote: competence.image || "",
              name: competence.name || "",
              title: competence.type || "",
            }))}
          />
        </div>
      </div>
    </div>
  );
}
