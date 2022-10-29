import AppDataSource from "../config/AppDataSource";
import { HealthProblem } from "../models/HealthProblem";

const HealthProblemRepository = AppDataSource.getMongoRepository(HealthProblem);

export { HealthProblemRepository };
