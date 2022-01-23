import { RequestHandler, Request, Response, NextFunction } from "express";

type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export default (handler: AsyncRequestHandler): RequestHandler =>
  async (req, res, next) => {
    try {
      return await handler(req, res, next);
    } catch (err) {
      return next(err);
    }
  };
