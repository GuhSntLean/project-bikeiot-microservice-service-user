import { Router } from "express";
import { HealthProblemController } from "../controllers/HealthProblemController";
import { UserCredentialController } from "../controllers/UserCredentialController";
import { UserInformationController } from "../controllers/UserInformationController";

const userInformation = new UserInformationController();
const userCredencial = new UserCredentialController();
const healthProblemController = new HealthProblemController();

const routes = Router();

routes.post("/user-information", userInformation.create);
routes.put("/user-information", userInformation.update);
routes.get("/user-information", userInformation.show);
routes.get("/list-user-informations", userInformation.list);

routes.get("/list-credential", userCredencial.list);

routes.post("/health-problem", healthProblemController.create);
routes.put("/health-problem", healthProblemController.update);
routes.get("/health-problem", healthProblemController.show);
routes.get("/list-health-problem", healthProblemController.list);

export default routes;
