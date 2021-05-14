import { CategoryRepo } from "../../categoryRepo";
import { categoryProps } from "../../categoryTypes";

export class GetCategory{
    private categoryRepo: CategoryRepo;

    constructor(categoryRepo: CategoryRepo){
        this.categoryRepo = categoryRepo
    }
    public async execute(props: categoryProps){
        return await this.categoryRepo.find(props);
    }
    
}