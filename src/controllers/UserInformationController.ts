import { Request, Response } from "express";
import { UserInformationUseCase } from "../usecases/UserInformationUseCase";

class UserInformationController {
  async create(request: Request, response: Response) {
    const { id, firstname, lastname, borndate, cellphone, phone } =
      request.body;

    if (!id || !firstname || !lastname || !borndate || !cellphone || !phone) {
      return response.status(500).json({ error: "Field is missing" });
    }

    const userInformationUseCase = new UserInformationUseCase();
    const result = await userInformationUseCase.save(
      id,
      firstname,
      lastname,
      borndate,
      cellphone,
      phone
    );

    if (result instanceof Error) {
      return response.status(500).json({ error: result.message });
    }

    return response.status(201).json(result);
  }

  async update(request: Request, response: Response) {
    const { id, firstname, lastname, borndate, cellphone, phone } =
      request.body;

    if (!id || !firstname || !lastname || !borndate || !cellphone || !phone) {
      return response.status(500).json({ error: "Field is missing" });
    }

    const userInformationUseCase = new UserInformationUseCase();
    const result = await userInformationUseCase.update(
      id,
      firstname,
      lastname,
      borndate,
      cellphone,
      phone
    );

    if (result instanceof Error) {
      return response.status(500).json({ error: result.message });
    }

    return response.status(201).json(result);
  }

  async show(request: Request, response: Response) {}

  async list(request: Request, response: Response) {}
}

export { UserInformationController };
