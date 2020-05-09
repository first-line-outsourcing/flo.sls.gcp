import { Request, Response } from 'express';
import Axios from 'axios';
export default async (req: Request, res: Response) => {
  if (req.method === 'GET') {
    const result = await Axios.get('http://dummy.restapiexample.com/api/v1/employees');
    return res.status(200).send(result.data);
  }
  res.send('Empty');
}
