import AppDataSource from "../config/AppDataSource";
import { CredentialUser } from "../models/CredentialUser";

const CredentialUserRepository = AppDataSource.getRepository(CredentialUser);

export { CredentialUserRepository };
