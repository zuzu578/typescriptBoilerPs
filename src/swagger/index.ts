import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { Express } from "express";
import { join } from "path";
import config from "../config";

const options = {
  apis: [join(__dirname, "*.yaml")],
  host: "",
  swaggerDefinition: {
    info: {
      description: config.SWAGGER.description,
      title: config.SWAGGER.title,
      version: config.SWAGGER.version,
    },
  },
};

const jsDoc = swaggerJSDoc(options);
const information = {
  basePath: "/",
  host: `${config.HOST}`,
};

export default (app: Express) => {
  if (config.NODE_ENV === "dev") {
    app.use(
      "/api-docs",
      swaggerUI.serve,
      swaggerUI.setup({ ...jsDoc, ...information })
    );
  }
};
