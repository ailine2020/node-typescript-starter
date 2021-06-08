import { GetCategory } from "./getCategory";
import { Request, Response } from "express";

export class GetCategoryController {
  private useCase: GetCategory;

  constructor(getCategory: GetCategory) {
    this.useCase = getCategory;
  }
  public async execute(_req: Request, res: Response) {

    const allCategories = await this.useCase.execute();
    console.log("All Categories", allCategories);

    res.status(200).json(allCategories);
  }
}
