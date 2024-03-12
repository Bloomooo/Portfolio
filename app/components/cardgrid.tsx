"use client";
import React from "react";
import { Panel, Placeholder, Row, Col } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { CardProps } from "../interface/cardprops";
import { CardsGridProps } from "../interface/cardgridprops";

const Card: React.FC<CardProps> = ({ competence }) => {
  return competence ? (
    <Panel bordered header={competence.name}>
      <Placeholder.Paragraph />
    </Panel>
  ) : null;
};

export const CardsGrid: React.FC<CardsGridProps> = ({ competence }) => {
  return (
    <Row>
      {competence.map((compe, index) => (
        <Col md={6} sm={12} key={index}>
          <Card competence={compe} />
        </Col>
      ))}
    </Row>
  );
};
