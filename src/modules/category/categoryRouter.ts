import { Router } from "express";
import { createCategoryController } from "./useCases/createCategory/";
import { getCategorycontroller } from "./useCases/getCategory";

const categoryRouter: Router = Router();

///api/v1/skills/
categoryRouter.get("/", (req, res) => getCategorycontroller.execute(req, res));
categoryRouter.post("/", (req, res) =>
  createCategoryController.execute(req, res)
);

export { categoryRouter };
