import express from "express";
import { submitContact } from "../controllers/contact.js";

const contactRouter = express.Router();

contactRouter.post("/", submitContact);

export default contactRouter;