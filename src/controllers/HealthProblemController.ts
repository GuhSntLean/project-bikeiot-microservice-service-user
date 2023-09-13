import { Request, Response } from "express";
import { HealthProblemUseCase } from "../usecases/HealthProblemUseCase";

class HealthProblemController {
  async create(request: Request, response: Response) {
    const { id, medicineallergy, healthproblems, foodallergy } = request.body;

    if (!id || !medicineallergy || !healthproblems || !foodallergy) {
      return response.status(400).json({ error: "Field is missing" });
    }

    const userInformationUseCase = new HealthProblemUseCase();
    const result = await userInformationUseCase.save(
      id,
      medicineallergy,
      healthproblems,
      foodallergy
    );

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message });
    }

    return response.status(201).json(result);
  }

  async update(request: Request, response: Response) {
    const { id, medicineallergy, healthproblems, foodallergy } = request.body;

    if (!id || !medicineallergy || !healthproblems || !foodallergy) {
      return response.status(500).json({ error: "Field is missing" });
    }

    const userInformationUseCase = new HealthProblemUseCase();
    const result = await userInformationUseCase.update(
      id,
      medicineallergy,
      healthproblems,
      foodallergy
    );

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message });
    }

    return response.status(201).json(result);
  }

  async show(request: Request, response: Response) {
    const { id } = request.body;
    console.log(id);
    if (!id) {
      return response.status(400).json({ error: "Field is missing" });
    }

    const userInformationUseCase = new HealthProblemUseCase();
    const result = await userInformationUseCase.show(id);

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message });
    }

    return response.status(201).json(result);
  }

  async list(request: Request, response: Response) {
    const userInformationUseCase = new HealthProblemUseCase();
    const result = await userInformationUseCase.list();

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message });
    }

    return response.status(201).json(result);
  }
}

export { HealthProblemController };
