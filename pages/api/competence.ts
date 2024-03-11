import redis from "@/util/redis";
import { NextApiRequest, NextApiResponse } from "next";
import { Competence } from "../../app/interface/competence";

export default async function competence(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const serializedCompetence = await redis.get("competence");

      if (!serializedCompetence) {
        return res.status(404).json({ error: "Competence not found" });
      }

      const competenceData: Competence[] =
        typeof serializedCompetence === "string"
          ? JSON.parse(serializedCompetence)
          : serializedCompetence;

      res.status(200).json(competenceData);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      res.status(500).json({ error: "Failed to fetch Competence" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
