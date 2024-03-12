"use client";
import React from "react";
import { Panel, Row, Col } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { CardProps } from "../interface/cardprops";
import { CardsGridProps } from "../interface/cardgridprops";

const Card: React.FC<CardProps> = ({ competence }) => {
  return competence ? (
    <Panel
      bordered
      className="w-[25vh] h-[15vh] max-w-[25vh] max-h-[25vh] flex flex-col relative"
    >
      <div className="flex-grow flex">
        <img
          src={competence.image}
          className="max-w-[5vh] max-h-[10vh] object-contain"
          alt={competence.name}
        />
      </div>
      <div
        className="absolute top-0 right-0 p-2 text-white"
        style={{ color: "white", textAlign: "right" }}
      >
        {competence.maitrise}
      </div>
      <div
        className="absolute bottom-0 right-0 p-2 text-white"
        style={{ color: "white", textAlign: "right" }}
      >
        {competence.name}
      </div>
    </Panel>
  ) : null;
};
export const CardsGrid: React.FC<CardsGridProps> = ({ competence }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
      {competence.map((compe, index) => (
        <Card key={index} competence={compe} />
      ))}
    </div>
  );
};
