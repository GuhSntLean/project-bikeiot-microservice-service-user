import { CredentialUser } from "../models/CredentialUser";
import { CredentialUserRepository } from "../repository/CredentialUserRepository";

class UserUseCase {
  async execute(textUser: string) {
    const user = JSON.parse(textUser);

    // const userExist =  await
    const userExist = await CredentialUserRepository.findOneBy({ id: user.id });

    if (userExist) {
      try {
        const result = await CredentialUserRepository.createQueryBuilder()
          .update(CredentialUser)
          .set({
            userName: user.username,
            email: user.email,
          })
          .where("id = :id", { id: user.id })
          .execute();

        console.log(result);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const newUser = CredentialUserRepository.create({
          id: user.id,
          userName: user.username,
          email: user.email,
        });

        await CredentialUserRepository.save(newUser);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async list() {
    try {
      const userExist = await CredentialUserRepository.find();

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

export { UserUseCase };
