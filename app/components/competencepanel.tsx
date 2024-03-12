import React, { useState } from "react";
import { CompetencePanelProps } from "../interface/panelprops";
import { CardsGrid } from "./cardgrid";

export const CompetencePanel: React.FC<CompetencePanelProps> = ({
  listeCompetence,
}) => {
  return (
    <div>
      <CardsGrid competence={listeCompetence} />
    </div>
  );
};
