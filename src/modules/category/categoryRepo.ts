import { categoryProps } from "./categoryTypes";

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
  public async getCategoryById() {
    const CategoryEntity = this.entities.Category;
    return await CategoryEntity.findOne();
  }
}
