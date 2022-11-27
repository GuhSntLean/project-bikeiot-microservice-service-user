import moment from "moment";
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

    console.log(userExist);
    if (!userExist) {
      return new Error("User does not exist in the database");
    }

    const birthday = moment(borndate).format('YYYY-MM-DD');

    try {
      const newInformationUser = UserInformationRepository.create({
        firstName: firstname,
        lastName: lastname,
        cellPhone: cellphone,
        phone: phone,
        dateBorn: birthday,
        credentialId: userExist
      });

      UserInformationRepository.save(newInformationUser);

      return newInformationUser
    } catch (error) {
      return new Error("User does not exist in the database");
    }
  }
}

export { UserInformationUseCase };
