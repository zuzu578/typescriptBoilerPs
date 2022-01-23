import { isString } from "lodash";
import { Sequelize, Options } from "sequelize";
import config from "../config";
import { DBCustomError } from "../errors";
import logger from "./logger";

const create = (database: string) => {
  const defaultOptions: Options = {
    port: config.MYSQL.PORT,
    username: config.MYSQL.USER,
    password: config.MYSQL.PASSWORD,
    dialect: "mysql",
    timezone: "+09:00",
    pool: {
      max: config.MYSQL.CONNECTION_POOL_MAX,
      min: config.MYSQL.CONNECTION_POOL_MIN,
      acquire: 30000,
      idle: 10000,
    },
  };

  if (isString(database) && database.length > 0) {
    defaultOptions["database"] = database;
  }

  const singleOptions = Object.assign(defaultOptions, {
    host: config.MYSQL.HOST,
  });

  return new Sequelize(singleOptions);
};

let sequelize: Sequelize;

export default async () => {
  const database = config.MYSQL.DATABASE;
  try {
    sequelize = create(database);
    await sequelize.authenticate();
  } catch (err: any) {
    if (err.message === `Unknown database '${database}'`) {
      try {
        sequelize = create("");
        await sequelize.authenticate();
        await sequelize.query(`CREATE DATABASE ${database};`);
        sequelize = create(database);
        await sequelize.authenticate();
        logger.info(`✅create database ${database} success!`);
      } catch (err: any) {
        console.error(err);
        throw new DBCustomError(`❗️Error in Create Database ${database}`);
      }
    } else {
      throw new DBCustomError(err.message);
    }
  }
};
