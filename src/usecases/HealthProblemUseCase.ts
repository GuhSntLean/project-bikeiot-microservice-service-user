import { HealthProblem } from "../models/HealthProblem";
import { CredentialUserRepository } from "../repository/CredentialUserRepository";
import { HealthProblemRepository } from "../repository/HealthProblemRepository";

class HealthProblemUseCase {
  async save() {
    const userExist = await CredentialUserRepository.findOneBy({
      id: idUser,
    });

    if (!userExist) {
      return new Error("User does not exist in the database");
    }

    const userInformarioExist = await HealthProblemRepository.findOne({
      where: { credentialId: { id: idUser } },
    });

    if (userInformarioExist) {
      return new Error("User information already exists, update.");
    }

    try {
      const newInformationUser = HealthProblemRepository.create({});

      HealthProblemRepository.save(newInformationUser);

      return newInformationUser;
    } catch (error) {
      return new Error("User does not exist in the database");
    }
  }

  async update() {
    const userExist = await HealthProblemRepository.findOne({
      where: { credentialId: { id: idUser } },
    });

    if (!userExist) {
      return new Error("User does not exist in the database");
    }

    try {
      const result = await HealthProblemRepository.createQueryBuilder()
        .update(HealthProblem)
        .set({})
        .where("credential_id = :credentialId", { credentialId: idUser })
        .execute();

      if (result.affected != 1) {
        return new Error("Error when updating");
      }

      const returnUserInformarion = await HealthProblemRepository.findOne({
        where: { credentialId: { id: idUser } },
      });

      return returnUserInformarion;
    } catch (error) {
      console.log(error);
      return new Error("Error when updating");
    }
  }

  async show(id: string) {
    try {
      const userExist = await HealthProblemRepository.findOne({
        where: { credentialId: { id: id } },
      });

      if (!userExist) {
        return new Error("User not found");
      }

      return userExist;
    } catch (error) {
      console.log(error);
      return new Error("User not found");
    }
  }

  async list() {
    try {
      const userExist = await HealthProblemRepository.find();

      if (!userExist) {
        return new Error("Informations not found");
      }

      return userExist;
    } catch (error) {
      console.log(error);
      return new Error("Informations not found");
    }
  }
}

export { HealthProblemUseCase };
