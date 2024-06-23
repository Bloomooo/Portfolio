import React, { useState } from "react";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./iut";
import { cn } from "@/util/cn";

const SkeletonOne = () => (
  <motion.div
    initial="initial"
    animate="animate"
    whileHover="hover"
    className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
    <img
      src="https://images.unsplash.com/photo-1518770660439-4636190af475"
      alt="Developers working on code"
      className="w-full h-full object-cover"
    />
  </motion.div>
);

const SkeletonTwo = () => (
  <motion.div
    initial="initial"
    animate="animate"
    whileHover="hover"
    className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
    <img
      src="https://images.unsplash.com/photo-1533750349088-cd871a92f312"
      alt="Performance analysis"
      className="w-full h-full object-cover"
    />
  </motion.div>
);

const SkeletonThree = () => (
  <motion.div
    initial="initial"
    animate="animate"
    whileHover="hover"
    className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
    <img
      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
      alt="Project management"
      className="w-full h-full object-cover"
    />
  </motion.div>
);

const SkeletonFour = () => (
  <motion.div
    initial="initial"
    animate="animate"
    whileHover="hover"
    className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
    <img
      src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d"
      alt="Team collaboration"
      className="w-full h-full object-cover"
    />
  </motion.div>
);

const SkeletonFive = () => (
  <motion.div
    initial="initial"
    animate="animate"
    whileHover="hover"
    className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
    <img
      src="https://www.pagepersonnel.fr/sites/pagepersonnel.fr/files/legacy/shutterstock_1062915392_970x480.jpg"
      alt="System administration"
      className="w-full h-full object-cover"
    />
  </motion.div>
);

const SkeletonSix = () => (
  <motion.div
    initial="initial"
    animate="animate"
    whileHover="hover"
    className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
    <img
      src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd"
      alt="Data management"
      className="w-full h-full object-cover"
    />
  </motion.div>
);

const DetailsOne = () => (
  <div className="max-w-3xl mx-auto bg-transparent text-white border-white border-2 shadow-md rounded-lg mt-4 p-6">
    <h1 className="text-3xl font-bold mb-4 text-center">
      Réaliser un développement d&apos;application
    </h1>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">
        Développer, c&apos;est-à-dire concevoir, coder, tester et intégrer une
        solution informatique pour un client - en expliquant et communiquant
        l&apos;avancée au client et aux utilisateurs - en précisant et en
        respectant les besoins décrits par le client - en appliquant les
        principes algorithmiques - en veillant à la qualité du code et à sa
        documentation - en respectant la législation, les normes
        professionnelles et les enjeux sociétaux - en choisissant les ressources
        techniques appropriées
      </h2>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Objectifs</h2>
      <ul className="list-disc ml-6">
        <li>Développer des applications informatiques simples</li>
        <li>Partir des exigences jusqu’à une application complète</li>
        <li>
          Adapter des applications sur différents supports (embarqué, web,
          mobile, IoT…)
        </li>
      </ul>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Niveaux de Compétence</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Niveau 1 :</strong> Développer des applications informatiques
          simples
        </li>
        <li>
          <strong>Niveau 2 (Atteint) :</strong> Partir des exigences jusqu’à une
          application complète
        </li>
        <li>
          <strong>Niveau 3 :</strong> Adapter des applications sur un ensemble
          de supports (embarqué, web, mobile, IoT…)
        </li>
      </ul>
      <p>
        Pourquoi je pense avoir ce niveau : J&apos;ai acquis ce niveau en
        réalisant plusieurs projets de développement d&apos;applications pour
        divers clients et utilisateurs. J&apos;ai suivi un processus rigoureux
        incluant la conception, le codage, les tests et l&apos;intégration de
        solutions informatiques. J&apos;ai également été capable de communiquer
        efficacement avec les parties prenantes pour m&apos;assurer que les
        besoins étaient respectés.
      </p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Justification</h2>
      <p>
        Stage - Isitec International
        <br />
        SAE - Java et Graphe Projet
        <br />
        CoursesPhp <br />
        SAE - Annuaire en C <br />
        SAE Clicker
      </p>
      <p>
        Ce que cela m&apos;a apporté : Ce niveau m&apos;a permis de développer
        des compétences avancées en programmation et en gestion de projet.
        J&apos;ai appris à appliquer des principes algorithmiques et à
        documenter efficacement mon code. J&apos;ai également compris
        l&apos;importance de la qualité du code et de la satisfaction client
        dans le développement d&apos;applications.
      </p>
    </div>
  </div>
);

const DetailsTwo = () => (
  <div className="max-w-3xl mx-auto bg-transparent text-white border-white border-2 shadow-md rounded-lg mt-4 p-6">
    <h1 className="text-3xl font-bold mb-4 text-center">
      Optimiser des applications informatiques
    </h1>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">
        Proposer des applications informatiques optimisées en fonction de
        critères spécifiques : temps d&apos;exécution, précision, consommation
        de ressources... -en formalisant et modélisant des situations complexes
        -en recensant les algorithmes et les structures de données usuels -en
        s&apos;appuyant sur des schémas de raisonnement -en justifiant les choix
        et validant les résultats
      </h2>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Objectifs</h2>
      <ul className="list-disc ml-6">
        <li>Appréhender et construire des algorithmes</li>
        <li>
          Sélectionner les algorithmes adéquats pour répondre à un problème
          donné
        </li>
        <li>Analyser et optimiser des applications</li>
      </ul>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Niveaux de Compétence</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Niveau 1 :</strong> Appréhender et construire des algorithmes
        </li>
        <li>
          <strong>Niveau 2 (Atteint) :</strong> Sélectionner les algorithmes
          adéquats pour répondre à un problème donné
        </li>
        <li>
          <strong>Niveau 3 :</strong> Analyser et optimiser des applications
        </li>
      </ul>
      <p>
        Pourquoi je pense avoir ce niveau : J&apos;ai atteint ce niveau en
        optimisant des applications existantes pour améliorer leur temps
        d&apos;exécution, leur précision et leur efficacité en termes de
        ressources. J&apos;ai utilisé des modèles de raisonnement structurés
        pour choisir et implémenter les algorithmes les plus adaptés à chaque
        problème spécifique.
      </p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Justification</h2>
      <p>
        Stage - Isitec International
        <br />
        Projet - CoursesPhp
        <br />
        SAE - Comparaison algorithmique en python
      </p>
      <p>
        Ce que cela m&apos;a apporté : Cette compétence m&apos;a permis
        d&apos;approfondir mes connaissances en algorithmique et en structures
        de données. J&apos;ai appris à identifier et résoudre des problèmes
        complexes tout en maintenant les standards de qualité élevés attendus
        dans le domaine du développement logiciel.
      </p>
    </div>
  </div>
);

const DetailsThree = () => (
  <div className="max-w-3xl mx-auto bg-transparent text-white border-white border-2 shadow-md rounded-lg mt-4 p-6">
    <h1 className="text-3xl font-bold mb-4 text-center">Conduire un projet</h1>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">
        Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur
        du client, organiser et piloter un projet informatique avec des méthodes
        classiques ou agiles. - en identifiant les problématiques du client et
        les enjeux économiques de l&apos;organisation - en adoptant une démarche
        proactive, créative et critique - en respectant les règles juridiques et
        les normes en vigueur - en communiquant efficacement avec les différents
        acteurs d&apos;un projet - en sensibilisant à une gestion éthique,
        responsable, durable et interculturelle
      </h2>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Objectifs</h2>
      <ul className="list-disc ml-6">
        <li>Identifier les besoins métiers des clients et des utilisateurs</li>
        <li>
          Appliquer une démarche de suivi de projet en fonction des besoins
          métiers des clients et des utilisateurs
        </li>
      </ul>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Niveaux de Compétence</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Niveau 1 (Atteint):</strong> Identifier les besoins métiers
          des clients et des utilisateurs
        </li>
        <li>
          <strong>Niveau 2 :</strong> Appliquer une démarche de suivi de projet
          en fonction des besoins métiers des clients et des utilisateurs
        </li>
      </ul>
      <p>
        Pourquoi je pense avoir ce niveau : J&apos;ai développé ce niveau en
        menant plusieurs projets informatiques, en utilisant à la fois des
        méthodes classiques et agiles. J&apos;ai identifié les besoins des
        clients et des utilisateurs, organisé les ressources nécessaires et
        assuré le suivi du projet tout au long de son cycle de vie.
      </p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Justification</h2>
      <p>
        Stage - Isitec International
        <br />
        SAE - Poster
        <br />
        SAE - Recueil de besoins
        <br />
        Projet - CoursesPhp
        <br />
        SAE Clicker
      </p>
      <p>
        Ce que cela m&apos;a apporté : La conduite de projet m&apos;a permis de
        développer des compétences en gestion de projet et en communication
        interpersonnelle. J&apos;ai appris à naviguer efficacement dans les
        dynamiques d&apos;équipe et à respecter les contraintes légales et
        réglementaires tout en maintenant un focus sur la satisfaction client.
      </p>
    </div>
  </div>
);

const DetailsFour = () => (
  <div className="max-w-3xl mx-auto bg-transparent text-white border-white border-2 shadow-md rounded-lg mt-4 p-6">
    <h1 className="text-3xl font-bold mb-4 text-center">
      Travailler dans une équipe informatique
    </h1>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">
        Acquérir, développer et exploiter les aptitudes nécessaires pour
        travailler efficacement dans une équipe informatique. en inscrivant sa
        démarche au sein d&apos;une équipe pluridisciplinaire en accompagnant la
        mise en œuvre des évolutions informatiques en veillant au respect des
        contraintes réglementaires et législatives en développant une
        communication efficace et collaborative
      </h2>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Objectifs</h2>
      <ul className="list-disc ml-6">
        <li>Identifier ses aptitudes pour travailler dans une équipe</li>
        <li>
          Situer son rôle et ses missions au sein d’une équipe informatique
        </li>
        <li>Manager une équipe informatique</li>
      </ul>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Niveaux de Compétence</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Niveau 1 :</strong> Identifier ses aptitudes pour travailler
          dans une équipe
        </li>
        <li>
          <strong>Niveau 2 (Atteint) :</strong> Situer son rôle et ses missions
          au sein d’une équipe informatique
        </li>
        <li>
          <strong>Niveau 3 :</strong> Manager une équipe informatique
        </li>
      </ul>
      <p>
        Pourquoi je pense avoir ce niveau : J&apos;ai acquis ce niveau en
        collaborant étroitement avec des équipes pluridisciplinaires dans
        différents contextes informatiques. J&apos;ai contribué à
        l&apos;évolution des solutions informatiques tout en respectant les
        contraintes réglementaires et en développant une communication
        collaborative et efficace.
      </p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Justification</h2>
      <p>
        Stage - Isitec International
        <br />
        SAE - Poster
        <br />
        SAE - Environnement économique
        <br />
        Projet - CoursesPhp
        <br />
        SAE Clicker
      </p>
      <p>
        Ce que cela m&apos;a apporté : Travailler dans une équipe m&apos;a
        permis de développer mes compétences en leadership et en gestion de
        conflits. J&apos;ai appris à identifier mes aptitudes personnelles au
        sein d&apos;une équipe et à les mettre à profit pour atteindre des
        objectifs communs dans des environnements variés.
      </p>
    </div>
  </div>
);

const DetailsFive = () => (
  <div className="max-w-3xl mx-auto bg-transparent text-white border-white border-2 shadow-md rounded-lg mt-4 p-6">
    <h1 className="text-3xl font-bold mb-4 text-center">
      Administrer des systèmes informatiques communicants complexes
    </h1>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">
        Installer, configurer, mettre à disposition, maintenir en conditions
        opérationnelles des infrastructures, des services et des réseaux et
        optimiser le système informatique d’une organisation. -en maîtrisant
        l’architecture des systèmes et des réseaux -en sécurisant le système
        d’information -en appliquant les obligations légales, les normes en
        vigueur et les bonnes pratiques -en mettant en œuvre les mesures
        correctives adaptées à la nature des incidents identifiés -en respectant
        les contraintes de performances, de coûts et d’efficacité énergétique
        -en assurant la pérennité des données et des logiciels
      </h2>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Objectifs</h2>
      <ul className="list-disc ml-6">
        <li>Administer des systèmes informatiques</li>
        <li>Sécuriser le système d’information</li>
        <li>Maintenir la performance des systèmes</li>
      </ul>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Niveaux de Compétence</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Niveau 1 :</strong> Administer des systèmes informatiques
        </li>
        <li>
          <strong>Niveau 2 (Atteint) :</strong> Sécuriser le système
          d’information
        </li>
        <li>
          <strong>Niveau 3 :</strong> Maintenir la performance des systèmes
        </li>
      </ul>
      <p>
        Pourquoi je pense avoir ce niveau : J&apos;ai atteint ce niveau en
        administrant des systèmes informatiques complexes, en assurant leur
        installation, configuration, maintenance et sécurisation. J&apos;ai
        utilisé mes connaissances approfondies de l&apos;architecture des
        systèmes et des réseaux pour optimiser les performances tout en
        respectant les normes et obligations légales.
      </p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Justification</h2>
      <p>
        Stage - Isitec International
        <br />
        SAE - Poster
        <br />
        SAE - Environnement économique
        <br />
        Projet - CoursesPhp
        <br />
        SAE Clicker
      </p>
    </div>
    <p>
      Ce que cela m&apos;a apporté : Cette compétence m&apos;a permis de devenir
      un administrateur système compétent, capable de gérer des infrastructures
      critiques avec efficacité et fiabilité. J&apos;ai appris à résoudre des
      incidents complexes et à maintenir la disponibilité et la sécurité des
      systèmes informatiques dans des environnements exigeants.
    </p>
  </div>
);

const DetailsSix = () => (
  <div className="max-w-3xl mx-auto bg-transparent text-white border-white border-2 shadow-md rounded-lg mt-4 p-6">
    <h1 className="text-3xl font-bold mb-4 text-center">
      Assurer une veille technologique
    </h1>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">
        Identifier, analyser et synthétiser les informations concernant les
        évolutions technologiques, les nouveautés et les innovations liées au
        domaine de l&apos;informatique -en évaluant la pertinence et
        l&apos;impact des évolutions technologiques -en informant et en
        conseillant les utilisateurs, les décideurs et l&apos;équipe
        informatique -en adoptant une démarche critique et créative face aux
        informations collectées -en adaptant sa veille technologique aux besoins
        et aux enjeux organisationnels
      </h2>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Objectifs</h2>
      <ul className="list-disc ml-6">
        <li>Surveiller les évolutions technologiques</li>
        <li>Analyser l&apos;impact des nouvelles technologies</li>
        <li>Conseiller et informer sur les innovations informatiques</li>
      </ul>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Niveaux de Compétence</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Niveau 1 :</strong> Surveiller les évolutions technologiques
        </li>
        <li>
          <strong>Niveau 2 (Atteint) :</strong> Analyser l&apos;impact des
          nouvelles technologies
        </li>
        <li>
          <strong>Niveau 3 :</strong> Conseiller et informer sur les innovations
          informatiques
        </li>
      </ul>
      <p>
        Pourquoi je pense avoir ce niveau : J&apos;ai développé ce niveau en
        surveillant activement les évolutions technologiques pertinentes pour
        mon domaine. J&apos;ai analysé leur impact potentiel, conseillé et
        informé mes collègues et décideurs sur les innovations informatiques
        stratégiques pour notre organisation.
      </p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Justification</h2>
      <p>
        Stage - Isitec International
        <br />
        SAE - Poster
        <br />
        SAE - Environnement économique
        <br />
        Projet - CoursesPhp
        <br />
        SAE Clicker
      </p>
      <p>
        Ce que cela m&apos;a apporté : La veille technologique m&apos;a permis
        de rester à jour avec les nouvelles technologies et les tendances
        émergentes. J&apos;ai développé une capacité critique à évaluer ces
        technologies et à les intégrer de manière appropriée pour répondre aux
        besoins organisationnels tout en maintenant une posture proactive dans
        mon domaine d&apos;expertise.
      </p>
    </div>
  </div>
);

interface Item {
  id: number;
  title: string;
  description: string;
  header: JSX.Element;
  className: string;
  icon: JSX.Element;
  details: JSX.Element;
}
// Define items array with each competence item
const items: Item[] = [
  {
    id: 1,
    title: "Competence 1 - Développement d'application",
    description: "Réaliser un développement d'application",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    details: <DetailsOne />,
  },
  {
    id: 2,
    title: "Competence 2 - Optimisation des applications informatiques",
    description: "Optimiser des applications informatiques",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    details: <DetailsTwo />,
  },
  {
    id: 3,
    title: "Competence 3 - Conduite de projet",
    description: "Conduire un projet",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    details: <DetailsThree />,
  },
  {
    id: 4,
    title: "Competence 4 - Travail en équipe informatique",
    description: "Travailler dans une équipe informatique",
    header: <SkeletonFour />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    details: <DetailsFour />,
  },
  {
    id: 5,
    title:
      "Competence 5 - Administration de systèmes informatiques communicants",
    description:
      "Administrer des systèmes informatiques communicants complexes",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    details: <DetailsFive />,
  },
  {
    id: 6,
    title: "Competence 6 - Gestion de données de l'information",
    description: "Gérer des données de l’information",
    header: <SkeletonSix />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    details: <DetailsSix />,
  },
];
export function BentoGridThirdDemo() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleClick = (id: number) => {
    console.log("clicked", id);
    setActiveItem(id === activeItem ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <BentoGrid className="grid gap-8 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn(
                "p:text-lg",
                item.className,
                "flex flex-col items-center justify-start text-center cursor-pointer"
              )}
              icon={item.icon}
              onClick={() => handleClick(item.id)}
            />
          </div>
        ))}
      </BentoGrid>
      {activeItem !== null && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-transparent shadow-md rounded-lg p-6 mt-4"
        >
          {items.find((item) => item.id === activeItem)?.details}
        </motion.div>
      )}
    </div>
  );
}
