import { GetCategoryById } from "./getCategoryById";
import { Request, Response } from "express";
import { Category } from "../../../../app/database/typeorm/entities/category";

export class GetCategoryByIdController {
  private useCase: GetCategoryById;

  constructor(getCategoryById: GetCategoryById) {
    this.useCase = getCategoryById;
  }
  public async execute(req: Request, res: Response) {
    console.log("+++++", req.params.id);

    // const oneCategory = await this.useCase.execute();
    // console.log("Controller One Category", oneCategory);
    const oneCategory = await Category.findOne(req.params.id);
    console.log("Controller One Category", oneCategory);
    

    res.status(200).json(oneCategory);
  }
}
