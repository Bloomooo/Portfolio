import React from "react";

const experiences = [
    {
        year: "2024 - 2025",
        title: "Altérnance développeur junior",
        location: "Isitec Internationnal",
        description: "",
    },
    {
        year: "2024",
        title: "CDD développeur junior",
        location: "Isitec Internationnal",
        description: "",
    },
    {
        year: "2024",
        title: "Stage développeur junior",
        location: "Isitec Internationnal",
        description: "",
    },
    {
        year: "2022 - 2025",
        title: "BUT Informatique",
        location: "IUT Lyon 1",
        description: "",
    },
    {
        year: "2022",
        title: "Lycée Louis Lachenal",
        location: "Argonay",
        description: "BAC STI2D, spétialité SIN",
    },
    // Ajoute d'autres expériences ici
];

export default function Experience() {
    return (
        <div className="relative border-l-2 border-zinc-400 ml-6 pl-6">
            {experiences.map((exp, index) => (
                <div key={index} className="mb-10 relative">
                    <div className="absolute -left-3 w-6 h-6 bg-zinc-700 rounded-full border-4 border-zinc-300" />
                    <h3 className="text-xl font-semibold text-white ml-4">{exp.title}</h3>
                    <span className="text-sm text-white italic">
            {exp.year} — {exp.location}
          </span>
                    <p className="mt-2 text-white">{exp.description}</p>
                </div>
            ))}
        </div>
    );
}
