  
import { Router } from 'express'
import { createStudentController } from './userCases/createStudent'

const studentRouter: Router = Router();

///api/v1/students/
studentRouter.post('/', (req, res) => createStudentController.execute(req, res))

export { studentRouter }