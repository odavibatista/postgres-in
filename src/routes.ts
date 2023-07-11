import express, { Request, Response } from 'express';
import { UsersController } from './controllers/UsersController';


export const router = express.Router()

router.get('/', (request: Request, response: Response) => response.json({ ping: `Hello, we're running on Node.js!` }))

/* Users routes */
                /* Show all users */
        router.get('/users', UsersController.index)
                /*Show a specific user */
        router.get('/users/:id', UsersController.show)
                /* Register a new user */
        router.post('/users', UsersController.save)
                /* Update a user's data */
        router.put('/users/:id', UsersController.update)
                /* Remove a user from the database */
        router.delete('/users/:id', UsersController.delete)