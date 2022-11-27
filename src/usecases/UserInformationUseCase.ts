import moment from "moment";
import { UserInformation } from "../models/UserInformation";
import { CredentialUserRepository } from "../repository/CredentialUserRepository";
import { UserInformationRepository } from "../repository/UserInformationRepository";

class UserInformationUseCase {
  async save(
    idUser: string,
    firstname: string,
    lastname: string,
    borndate: string,
    cellphone: string,
    phone: string
  ) {
    const userExist = await CredentialUserRepository.findOneBy({
      id: idUser,
    });

    if (!userExist) {
      return new Error("User does not exist in the database");
    }

    const userInformarioExist = await UserInformationRepository.findOne({
      where: { credentialId: { id: idUser } },
    });

    if (userInformarioExist) {
      return new Error("User information already exists, update.");
    }

    try {
      const birthday = moment(borndate).format("YYYY-MM-DD");
      const newInformationUser = UserInformationRepository.create({
        firstName: firstname,
        lastName: lastname,
        cellPhone: cellphone,
        phone: phone,
        dateBorn: birthday,
        credentialId: userExist,
      });

      UserInformationRepository.save(newInformationUser);

      return newInformationUser;
    } catch (error) {
      return new Error("User does not exist in the database");
    }
  }

  async update(
    idUser: string,
    firstname: string,
    lastname: string,
    borndate: string,
    cellphone: string,
    phone: string
  ) {
    const userExist = await UserInformationRepository.findOne({
      where: { credentialId: { id: idUser } },
    });

    if (!userExist) {
      return new Error("User does not exist in the database");
    }

    try {
        try {
            const result = await CredentialUserRepository.createQueryBuilder()
              .update(UserInformation)
              .set({
               firstName: firstname || userExist.firstName,
               lastName: lastname || userExist.lastName,
               dateBorn: borndate || userExist.dateBorn,
               cellPhone: cellphone || userExist.cellPhone,
               phone: phone || userExist.phone
              })
              .where("credential_id = :credentialId", { credentialId: idUser })
              .execute();

              if (result.affected != 1) {
                return new Error("Error when updating");
              }

              const returnUserInformarion = await UserInformationRepository.findOne({
                where: { credentialId: { id: idUser } },
              });
    
            return returnUserInformarion
          } catch (error) {
            console.log(error);
            return new Error("Error when updating");
          }
    } catch (error) {
      return new Error("User does not exist in the database");
    }
  }
}

export { UserInformationUseCase };
