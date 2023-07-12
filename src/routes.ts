import express, { Request, Response } from 'express';
import { UsersController } from './controllers/UsersController';
import { CompaniesController } from './controllers/CompaniesController';
import { JobsController } from './controllers/JobsController';
import { TestsController } from './controllers/TestsController';


export const router = express.Router()

router.get('/', (request: Request, response: Response) => response.json({ ping: `Hello, we're running on Node.js!` }))

/* Users routes */
        /* Show all users */
        router.get(
                '/users', 
                UsersController.index
                )
        /*Show a specific user */
        router.get(
                '/users/:id', 
                UsersController.show
                )
        /* Register a new user */
        router.post(
                '/users', 
                UsersController.save
                )
        /* Update a user's data */
        router.put(
                '/users/:id', 
                UsersController.update
                )
        /* Remove a user from the database */
        router.delete(
                '/users/:id', 
                UsersController.delete
                )
                
/* Tests routes */
        /* Show all test */
        router.get(
                '/tests',
                TestsController.index
                )
        /* Show a specific test */
        router.get(
                '/tests/:id', 
                TestsController.show
                )
        /* Register a new test */
        router.post(
                '/tests', 
                TestsController.save
                )
        /* Update a test's data */
        router.put(
                '/tests/:id', 
                TestsController.update
                )
        /* Remove a test from the database */
        router.delete(
                '/tests/:id', 
                TestsController.delete
                )

/* Companies routes */
        /* Show all companies */
        router.get(
                '/companies',
                CompaniesController.index
                )
        /* Show a specific company */
        router.get(
                '/companies/:id', 
                CompaniesController.show
                )
        /* Register a new company */
        router.post(
                '/companies', 
                CompaniesController.save
                )
        /* Update a company's data */
        router.put(
                '/companies/:id', 
                CompaniesController.update
                )
        /* Remove a company from the database */
        router.delete(
                '/companies/:id', 
                CompaniesController.delete
                )

/* Jobs routes */
        /* Show all jobs */
        router.get(
                '/jobs', 
                JobsController.index
                )
        /* Show a specific job */
        router.get(
                '/jobs/:id', 
                JobsController.show
                )
        /* Register a new job */
        router.post(
                '/jobs', 
                JobsController.save
                )
        /* Add a candidate to the job*/
        router.post(
                '/jobs/:id/addCandidate', 
                JobsController.addCandidate
                )
        /* Update a job's data */
        router.put(
                '/jobs/:id', 
                JobsController.update
                )
        /* Remove a job from the database */
        router.delete(
                '/jobs/:id',
                JobsController.delete
                )
        /* Remove a candidate from the job */
        router.delete(
                '/jobs:id/removeCandidate', 
                JobsController.removeCandidate
                )