import { Request, Response } from "express";
import { UserUseCase } from "../usecases/UserUseCase";

class UserCredentialController {
  async list(request: Request, response: Response) {
    const userCredentialUseCase = new UserUseCase();
    const result = await userCredentialUseCase.list();

    if (result instanceof Error) {
      return response.status(500).json({ error: result.message });
    }

    return response.status(201).json(result);
  }
}

export { UserCredentialController };
