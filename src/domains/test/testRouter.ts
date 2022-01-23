import express from "express";
import { async } from "../../handlers";
import * as testController from "./testController";
const router = express.Router();

router.get('/',[],async(testController.test))


export default router;