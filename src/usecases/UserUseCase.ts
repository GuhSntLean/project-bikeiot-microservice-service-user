import { CredentialUserRepository } from "../repository/CredentialUserRepository";

class UserUseCase {
  async execute(textUser: string) {
    const user = JSON.parse(textUser);

    // const userExist =  await
    const userExist = await CredentialUserRepository.findOneBy({ id: user.id });

    if (!userExist) {
      try {
        const newUser = CredentialUserRepository.create({
          id: user.id,
          userName: user.userName,
          email: user.email,
        });

        await CredentialUserRepository.save(newUser);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export { UserUseCase };
