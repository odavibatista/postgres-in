import express, { Request, Response } from 'express';
import { UsersController } from './controllers/UsersController';


export const router = express.Router()

router.get('/', (request: Request, response: Response) => response.json({ ping: `Hello, we're running on Node.js!` }))

/* Users routes */
                /* Show all users */
        router.get('/user', UsersController.index)