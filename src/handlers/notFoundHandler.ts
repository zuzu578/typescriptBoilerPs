import { RequestHandler } from "express";
const notFoundHandler: RequestHandler = (req, res) => res.sendStatus(404);
export { notFoundHandler };
