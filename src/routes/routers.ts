import { Router } from "express";
import { HealthProblemController } from "../controllers/HealthProblemController";
import { UserInformationController } from "../controllers/UserInformationController";
import AuthenticatedAdminMiddleware from "../middleware/AuthenticatedAdminMiddleware";
import AuthenticatedUserMiddleware from "../middleware/AuthenticatedUserMiddleware";

const authenticatedAdminMiddleware = new AuthenticatedAdminMiddleware();
const authenticatedUserMiddleware = new AuthenticatedUserMiddleware();

const userInformation = new UserInformationController();
const healthProblemController = new HealthProblemController();

const routes = Router();

// User route
routes.post(
  "/user-information",
  authenticatedUserMiddleware.ensureAuthenticated,
  userInformation.create
);
routes.put(
  "/user-information",
  authenticatedUserMiddleware.ensureAuthenticated,
  userInformation.update
);
routes.post(
  "/get-user-information",
  authenticatedUserMiddleware.ensureAuthenticated,
  userInformation.show
);

routes.post(
  "/health-problem",
  authenticatedUserMiddleware.ensureAuthenticated,
  healthProblemController.create
);
routes.put(
  "/health-problem",
  authenticatedUserMiddleware.ensureAuthenticated,
  healthProblemController.update
);
routes.post(
  "/get-health-problem",
  authenticatedUserMiddleware.ensureAuthenticated,
  healthProblemController.show
);

// Administrador routes
routes.post(
  "/getuser-user-information",
  authenticatedAdminMiddleware.ensureAuthenticated,
  userInformation.show
);
routes.post(
  "/getuser-health-problem",
  authenticatedAdminMiddleware.ensureAuthenticated,
  healthProblemController.show
);
routes.post(
  "/list-user-informations",
  authenticatedAdminMiddleware.ensureAuthenticated,
  userInformation.list
);
routes.post(
  "/list-health-problem",
  authenticatedAdminMiddleware.ensureAuthenticated,
  healthProblemController.list
);

export default routes;
