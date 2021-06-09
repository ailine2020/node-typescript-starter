import { CreateUser } from "./createUser";
import { Request, Response } from "express";
import { validate } from "class-validator";

//DTO
import { RequestCreateUserDto } from "./createUserDto";

//Controller
export class CreateUserController {
  private useCase: CreateUser;

  constructor(createUser: CreateUser) {
    this.useCase = createUser;
  }

  public async execute(req: Request, res: Response) {
    // body {
    //     email:"qsdqsd@qsdqs.com"
    //     password:"*******"
    // }

    const requestUserDto = new RequestCreateUserDto(req.body);
    const errors = await validate(requestUserDto);

    console.log("Request DTO create user errors : ", errors);

    // const dtoErrors = await requestUserDto.isValid(requestUserDto)

    // if (!!dtoErrors) {
    //     return res.status(400).json(dtoErrors);
    // }

    // this.useCase.execute(req.body);

    const allUsers = await this.useCase.find();
    // console.log("All users", allUsers);

    res.status(200).json(allUsers);
  }
}
