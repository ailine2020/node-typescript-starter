import { Router, Request, Response } from 'express'

const v1Router: Router = Router()

v1Router.get('/', (_: Request, res: Response) => {
    res.status(200).json('Hello world');
})
v1Router.get('/test', (_: Request, res: Response) => {
    res.status(200).json('top!');
})

export { v1Router }