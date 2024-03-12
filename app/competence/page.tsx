"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Competence } from "../interface/competence";
import { InfiniteMovingCards } from "../components/infinite-moving-cards";

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
        }
      } catch (error) {
        console.error("Error fetching competences:", error);
      }
    };

    fetchCompetences();
  }, []);

  return (
    <div>
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <InfiniteMovingCards
          items={listeCompetence.map((competence) => ({
            quote: competence.image || "",
            name: competence.name || "",
            title: competence.type || "",
          }))}
          direction="left"
          speed="fast"
          pauseOnHover={true}
          className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16 max-h-[50vh]"
        />
      </div>
    </div>
  );
}
