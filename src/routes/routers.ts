import { Router } from "express";
import { UserCredentialController } from "../controllers/UserCredentialController";
import { UserInformationController } from "../controllers/UserInformationController";


const userInformation = new UserInformationController();
const userCredencial = new UserCredentialController();

const routes = Router();

routes.post("/user-information", userInformation.create);
routes.put("/user-information", userInformation.update);
routes.get("/user-information", userInformation.show);
routes.get("/list-user-informations", userInformation.list);

routes.get("/list-credential", userCredencial.list)
export default routes;
