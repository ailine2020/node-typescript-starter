// import { getCategoryById } from "../../categoryRepo";
import { CategoryRepo } from "../../categoryRepo";

export class GetCategoryById {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async execute() {
    return await getCategoryById();
  }
}
