"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Competence } from "../interface/competence";
import { InfiniteMovingCards } from "../components/infinite-moving-cards";
import { CardsGrid } from "../components/cardgrid";
import competence from "@/pages/api/competence";

export const listeCompPanel: Competence[] = [];

export default function Competences() {
  const [listeCompetence, setListeCompetence] = useState<Competence[]>([]);

  useEffect(() => {
    const fetchCompetences = async () => {
      try {
        const response = await fetch("/api/competence");
        const data = await response.json();
        if (Array.isArray(data)) {
          setListeCompetence(data);
        } else {
          console.error("Received data is not an array:", data);
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
    <div>
      <div className="container flex items-center justify-center min-h-screen">
        <InfiniteMovingCards
          items={listeCompetence.map((competence) => ({
            quote: competence.image || "",
            name: competence.name || "",
            title: competence.type || "",
          }))}
        />
      </div>
      <div>
        <CardsGrid competence={listeCompetence} />
      </div>
    </div>
  );
}
