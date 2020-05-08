import { log } from '@helper/logger';
import { Request, Response } from 'express';
import test from './api/test';

exports.http = (req: Request, res: Response) => {
  log(req.method, req.path);
  // Allow CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const paths = {
    '/test': test,
    // Default route (at the end)
    '/': () => res.send(Object.keys(paths))
  };
  // Find the first route that matches
  for (const [path, route] of Object.entries(paths)) {
    if (req.path.startsWith(path)) {
      return route(req, res);
    }
  }

  res.status(404).send('No path found');
};

exports.event = (event, callback) => {
  callback();
};
