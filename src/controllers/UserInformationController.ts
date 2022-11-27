import { Request, Response } from "express";
import { UserInformationUseCase } from "../usecases/UserInformationUseCase";

class UserInformationController {
  async create(request: Request, response: Response) {
    const { id, firstname, lastname, borndate, cellphone, phone } = request.body;

    if (!id || !firstname || !lastname || !borndate || !cellphone) {
      return response.status(500).json({ error: "Field is missing" });
    }

    const userInformationUseCase = new UserInformationUseCase();
    const result = await userInformationUseCase.save(id, firstname, lastname, borndate, cellphone, phone);

    if (result instanceof Error) {
        return response.status(500).json(result.message);
      }

    return response.status(201).json();
  }

  async update(request: Request, reponse: Response) {}

  async show(request: Request, reponse: Response) {}

  async list(request: Request, reponse: Response) {}
}

export { UserInformationController };
