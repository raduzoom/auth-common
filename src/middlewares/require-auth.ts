import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    console.log(' request is -> ', JSON.stringify(req));
    throw new NotAuthorizedError();
  }

  next();
};
