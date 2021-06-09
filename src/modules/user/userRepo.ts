import { createUserProps } from "./userTypes";

export class UserRepo {
  private entities: any;

  constructor(entities: any) {
    this.entities = entities;
  }

  public async create(userProps: createUserProps) {
    const UserEntity = this.entities.User;
    console.log("create user", UserEntity);
    return await UserEntity.create(userProps).save();
  }

  public async find() {
    const UserEntity = this.entities.User;
    // console.log("user entity", UserEntity);
    return await UserEntity.find();
  }
}
