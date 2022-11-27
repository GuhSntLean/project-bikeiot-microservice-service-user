import { Router } from "express";
import { UserInformationController } from "../controllers/UserInformationController";

const userInformation = new UserInformationController();

const routes = Router();

routes.post("/use-rinformation", userInformation.create);

export default routes;
