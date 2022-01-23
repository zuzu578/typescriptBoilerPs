import { RequestHandler } from "express";
import {
  query,
  body,
  param,
  header,
  check,
  validationResult,
} from "express-validator";
import { BadRequestError } from "../errors";
import { Search } from "../types/common";

interface ValidationContext {
  fields: string[];
  locations: string[];
  stack: any[];
  optional: boolean;
  message?: string;
  _errors: any[];
  dataMap: any;
}

export const validate = (): RequestHandler => (req: any, res, next) => {
  let validations: ValidationContext[] = req["express-validator.ts#contexts"];
  if (Array.isArray(validations)) {
    for (const validation of validations) {
      for (const stack of validation.stack) {
        if (stack.validator) {
          const validatorName = stack.validator.name;
          let validatorOptions = "";
          if (stack.options && Array.isArray(stack.options)) {
            validatorOptions = stack.options
              .map((o: {}) => JSON.stringify(o))
              .join("");
          }

          if (validatorName || validatorOptions) {
            stack.message = `[${validatorName}]: [${validatorOptions}]`;
          }
        }
      }
    }
  }

  const errors = validationResult(req).array({ onlyFirstError: true });
  if (errors.length > 0) {
    const { value, msg, param, location } = errors[0];
    throw new BadRequestError(
      `Invalid param [${location}.${param}] value [${value}] ===> ${msg}`
    );
  }
  next();
};

export const isSearch = (allows: string[]) => (properties: Search) => {
  try {
    for (const [key, value] of Object.entries(properties)) {
      if (!allows.includes(key)) return false;
      if (typeof key !== "string") return false;
      if (Array.isArray(value)) return true;
      if (value === null) return true;
      if (
        !["string", "number", "boolean"].includes(typeof value) &&
        value !== null
      )
        return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};

export { query, body, param, header, check };
