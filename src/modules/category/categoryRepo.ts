import { categoryProps } from "./categoryTypes";
import { Request, Response } from "express";

export class CategoryRepo {
  private entities: any;

  constructor(entities: any) {
    //Category //User //Skill
    this.entities = entities;
  }

  // public async getCategories(props) {
  //     const CategoryEntity = this.entities.Category
  //     return await CategoryEntity.create();
  // }

  public async create(categoryProps: categoryProps) {
    const CategoryEntity = this.entities.Category;

    return await CategoryEntity.create({
      name: categoryProps.name,
      description: categoryProps.description,
    }).save();
  }
  public async find() {
    const CategoryEntity = this.entities.Category;
    console.log("-----------", CategoryEntity);
    return await CategoryEntity.find();
  }
  public async getCategoryById(req: Request, _res: Response) {
    const CategoryEntity = this.entities.Category;
    console.log("-----------", req.params.id);
    return await CategoryEntity.findOne(req.params.id);
  }
}
