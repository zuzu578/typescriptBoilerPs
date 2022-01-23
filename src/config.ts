import * as dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 4000,
  HOST: process.env.HOST || `192.168.0.47:${process.env.PORT || 4000}`,
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  MYSQL: {
    HOST: process.env.DB_HOST || "",
    PORT: Number(process.env.DB_PORT) || 3306,
    USER: process.env.DB_USER || "",
    PASSWORD: process.env.DB_PASSWORD || "",
    DATABASE: process.env.DB_DATABASE || "",
    CONNECTION_POOL_MAX: Number(process.env.MYSQL_CONNECTION_POOL_MAX) || 5,
    CONNECTION_POOL_MIN: Number(process.env.MYSQL_CONNECTION_POOL_MIN) || 0,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET || "",
    ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN || "3h",
    REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || "1d",
    EXPIRES_OUT: process.env.JWT_EXPIRES_OUT || 1,
  },
  KEY: {
    PASSWORD_SECRET: process.env.PASSWORD_SECRET || "",
  },
 

  morganFormat:
    ":remote-addr - :remote-user :method :url HTTP/:http-version :status - :response-time ms :res[content-length] :user-agent",
  NODE_ENV: process.env.NODE_ENV || "",

 
};
