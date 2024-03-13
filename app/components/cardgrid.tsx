"use client";
import React from "react";
import { Panel, Row, Col } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { CardProps } from "../interface/cardprops";
import { CardsGridProps } from "../interface/cardgridprops";

const Card: React.FC<CardProps> = ({ competence }) => {
  return competence ? (
    <a href={competence.url} target="_blank" rel="noopener noreferrer">
      <Panel
        bordered
        className="flex flex-col relative"
        style={{
          width: "17rem",
          height: "10rem",
          maxWidth: "100%",
        }}
      >
        <div className="flex-grow">
          <img
            src={competence.image}
            className="object-contain"
            alt={competence.name}
            style={{
              maxHeight: "6rem",
            }}
          />
        </div>
        <div
          className="absolute top-0 right-0 p-2 text-white"
          style={{ textAlign: "right" }}
        >
          {competence.maitrise}
        </div>
        <div
          className="absolute bottom-0 right-0 p-2 text-white"
          style={{ textAlign: "right" }}
        >
          {competence.name}
        </div>
      </Panel>
    </a>
  ) : null;
};

export const CardsGrid: React.FC<CardsGridProps> = ({ competence }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {competence.map((compe, index) => (
        <Card key={index} competence={compe} />
      ))}
    </div>
  );
};
