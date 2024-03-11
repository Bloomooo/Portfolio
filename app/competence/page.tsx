"use client";

import Link from "next/link";
import { Card } from "../components/card";
import { useEffect, useState } from "react";
import { Competence } from "../interface/competence";

export default function Competences() {
  const [listeCompetence, setListeCompetence] = useState<Competence[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/competence");
      const data = await response.json();
      if (Array.isArray(data)) {
        setListeCompetence(data);
      } else {
        console.error("Received data is not an array:", data);
        setListeCompetence([]);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {listeCompetence?.map((s, index) => (
            <Card key={index}>
              <Link href={s.url || "#"} passHref legacyBehavior>
                <a
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    <img
                      src={s.image}
                      className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange"
                    />
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.name}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.maitrise}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.type}
                    </span>
                  </div>
                </a>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
