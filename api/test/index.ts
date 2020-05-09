import { log } from '@helper/logger';
import axios from 'axios';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  if (req.method === 'GET') {
    const result = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
    log('ENV check', process.env.HELEN);
    return res.status(200).send(result.data);
  }
  res.send('Empty');
};
