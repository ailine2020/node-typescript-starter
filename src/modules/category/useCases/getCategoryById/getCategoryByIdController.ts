import { GetCategoryById } from "./getCategoryById";
import { Request, Response } from "express";

export class GetCategoryByIdController {
  private useCase: GetCategoryById;

  constructor(getCategoryById: GetCategoryById) {
    this.useCase = getCategoryById;
  }
  public async execute(_req: Request, res: Response) {
    const oneCategory = await this.useCase.execute();
    console.log("Controller One Category", oneCategory);

    res.status(200).json(oneCategory);
  }
}
