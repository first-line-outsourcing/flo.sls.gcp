import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  if (req.method === 'GET') {
    return res.status(200).send(process.env);
  }
  res.send('Empty');
}
