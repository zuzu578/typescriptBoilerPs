import { isEmpty } from "lodash";

export default (res: any, data?: Object, attributes?: any) => {
  let statusCode = 200;

  if (data === null) {
    data = {};
  }

  if (isEmpty(data)) {
    statusCode = 202;
  }

  res.status(statusCode);
  res.json({
    status: {
      version: process.env.API_VERSION,
      code: statusCode,
      message: "OK",
    },
    results: data,
    attributes: attributes,
  });
};
