import { Express } from "express";
import { success } from "../handlers";
import testRouter from "./test/testRouter";
export default (app: Express) => {
  app.get("/", (req, res) => {
    success(res, {
      env: process.env.NODE_ENV,
      pid: process.pid,
      uptime: process.uptime(),
    });
  });
  app.use('/',testRouter);
};




