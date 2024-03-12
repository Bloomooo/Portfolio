"use client";
import React, { useEffect, useState } from "react";
import { Competence } from "../interface/competence";
import { InfiniteMovingCards } from "../components/infinite-moving-cards";
import { CardsGrid } from "../components/cardgrid";

const navigation = [
  { name: "Langage", href: "Langage" },
  { name: "Framework", href: "Framework" },
  { name: "Base de Données", href: "Base de Données" },
  { name: "Autre", href: "Autre" },
];

export const listeCompPanel: Competence[] = [];

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
          listeCompPanel.push(data);
        }
      } catch (error) {
        console.error("Error fetching competences:", error);
      }
    };

    fetchCompetences();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container flex items-center justify-center min-h-screen">
        <InfiniteMovingCards
          items={listeCompetence.map((competence) => ({
            quote: competence.image || "",
            name: competence.name || "",
            title: competence.type || "",
          }))}
        />
      </div>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => setSelectedType(item.name)}
                className={`text-sm duration-500 ${
                  selectedType === item.name ? "text-zinc-500" : "text-gray-500"
                } hover:text-zinc-300`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-wrap justify-center gap-8 h-[40vh]">
        <CardsGrid
          competence={selectedType ? filteredCompetences : listeCompetence}
        />
      </div>
    </div>
  );
}
