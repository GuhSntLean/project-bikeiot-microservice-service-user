import AppDataSource from "../config/AppDataSource";
import { HealthProblem } from "../models/HealthProblem";

const HealthProblemRepository = AppDataSource.getRepository(HealthProblem);

export { HealthProblemRepository };
