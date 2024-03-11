// pages/api/projects.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '@/util/redis';
import { Project } from '@/app/projects/page';

export default async function projects(req: NextApiRequest, res: NextApiResponse<Project[] | { error: string }>) {
  if (req.method === 'GET') {
    try {
        const serializedProjects = await redis.get('ma_cle');

      if (!serializedProjects) {
        return res.status(404).json({ error: 'Projects not found' });
      }
      
      const projectsData: Project[] = typeof serializedProjects === 'string' ? JSON.parse(serializedProjects) : serializedProjects;
      

      res.status(200).json(projectsData);

    } catch (error) {
        console.error('Failed to fetch projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
  } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
