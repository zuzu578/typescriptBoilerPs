import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config";
import morgan from "morgan";
import logger, { stream } from "./utils/logger";
import { errHandler, notFoundHandler } from "./handlers";
import bindDomains from "./domains";
import swagger from "./swagger";

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan(config.morganFormat, { stream }));

bindDomains(app);
swagger(app);

app.use(helmet());
app.use(errHandler);
app.use(notFoundHandler);
app.listen(config.PORT, () => {
  logger.info(`server running... PORT : ${config.PORT}`);
});
