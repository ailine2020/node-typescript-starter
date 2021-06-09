import { Router } from 'express'
import { createUserController } from './useCases/createUser/index'

const userRouter: Router = Router();

//Create

userRouter.get('/', (req, res) => createUserController.execute(req, res))
userRouter.post('/', (req, res) => createUserController.execute(req, res))

export { userRouter }