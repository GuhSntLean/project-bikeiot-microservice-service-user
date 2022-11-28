import { UserHealthInterface } from "../Interfaces/UserHealthInterface";
import { HealthProblem } from "../models/HealthProblem";
import { CredentialUserRepository } from "../repository/CredentialUserRepository";
import { HealthProblemRepository } from "../repository/HealthProblemRepository";

class HealthProblemUseCase {
  async save(
    idUser: string,
    medicineallergy: string,
    healthproblems: string,
    foodallergy: string
  ) {
    console.log(idUser);
    const userExist = await CredentialUserRepository.findOneBy({
      id: idUser,
    });
    console.log(userExist);
    if (!userExist) {
      return new Error("User does not exist in the database");
    }

    const userHealthProblem = await HealthProblemRepository.findOne({
      where: { credentialId: { id: idUser } },
    });

    if (userHealthProblem) {
      return new Error("User information already exists, update.");
    }

    try {
      const newUserHealthProblem = HealthProblemRepository.create({
        medicineAllergy: medicineallergy,
        foodAllergy: foodallergy,
        healthProblems: healthproblems,
        credentialId: userExist,
      });

      HealthProblemRepository.save(newUserHealthProblem);

      const returnUser: UserHealthInterface = {
        iduser: newUserHealthProblem.credentialId.id,
        foodallergy: newUserHealthProblem.foodAllergy,
        healthproblems: newUserHealthProblem.healthProblems,
        medicineallergy: newUserHealthProblem.foodAllergy,
      };

      return returnUser;
    } catch (error) {
      return new Error("User does not exist in the database");
    }
  }

  async update(
    idUser: string,
    medicineallergy: string,
    healthProblems: string,
    foodallergy: string
  ) {
    const userExist = await HealthProblemRepository.findOne({
      where: { credentialId: { id: idUser } },
    });

    if (!userExist) {
      return new Error("User does not exist in the database");
    }

    try {
      const result = await HealthProblemRepository.createQueryBuilder()
        .update(HealthProblem)
        .set({
          medicineAllergy: medicineallergy || userExist.medicineAllergy,
          healthProblems: healthProblems || userExist.healthProblems,
          foodAllergy: foodallergy || userExist.foodAllergy,
        })
        .where("credential_id = :credentialId", { credentialId: idUser })
        .execute();

      if (result.affected != 1) {
        return new Error("Error when updating");
      }

      const returnUserHealthProblem = await HealthProblemRepository.findOne({
        where: { credentialId: { id: idUser } },
        relations: {
          credentialId: true,
        },
      });

      const returnUser: UserHealthInterface = {
        iduser: returnUserHealthProblem.credentialId.id,
        foodallergy: returnUserHealthProblem.foodAllergy,
        healthproblems: returnUserHealthProblem.healthProblems,
        medicineallergy: returnUserHealthProblem.foodAllergy,
      };

      return returnUser;
    } catch (error) {
      console.log(error);
      return new Error("Error when updating");
    }
  }

  async show(id: string) {
    try {
      const userExist = await HealthProblemRepository.findOneBy({
        credentialId: { id: id },
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
      const list = await HealthProblemRepository.find();

      if (!list) {
        return new Error("Informations not found");
      }

      return list;
    } catch (error) {
      console.log(error);
      return new Error("Informations not found");
    }
  }
}

export { HealthProblemUseCase };
