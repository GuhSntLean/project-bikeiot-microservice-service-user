import AppDataSource from "../config/AppDataSource";
import { UserInformation } from "../models/UserInformation";

const UserInformationRepository =
  AppDataSource.getMongoRepository(UserInformation);

export { UserInformationRepository };
