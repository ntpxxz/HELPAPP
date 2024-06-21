'user server'
import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const querySql = `SELECT * FROM jobscase`;
    const data = await query({ query: querySql, values: []});

    res.status(200).json(data);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
