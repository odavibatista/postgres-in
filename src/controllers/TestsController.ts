import { Request, Response } from "express"
import { Test } from '../models'

export const TestsController = {
                /* Show all tests */
    /* Input route: localhost:3000/tests */
    index: async (request: Request, response: Response) =>  {
        try {
            const tests = await Test.findAll()
            return response.json(tests)
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },
        /* Save a company on the database */
    /* Input route: localhost:3000/companies */
    save: async (request: Request, response: Response) =>   {
        const { name, stacks, applies } = request.body

        try {
            const test = await Test.create({
                name,
                stacks,
                applies
            })

            return response.status(201).json(test)
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },
            /* Show info of a specific company */
    /* Input route: localhost:3000/companies/[id] */
    show:   async (request: Request, response: Response) => {
        const { id } = request.params

        try {
            const test = await Test.findByPk(id)
            return response.json(test)
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },
        /* Update a specific company's info */
    /* Input route: localhost:3000/companies/[id] */
    update: async (request: Request, response: Response) => {
        const { id } = request.params
        const { name, stacks, applies } = request.body

        try {
            const [affectedRows, tests] = await Test.update({
                name,
                stacks,
                applies
            }, {
                where: { id },
                returning: true
            })

            return response.json(tests[0])

        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },
        /* Remove a specific company from the database*/
    /* Input route: localhost:3000/companies/[id] */
    delete: async (request: Request, response: Response) => {
        const { id } = request.params

        try {
            await Test.destroy({ where: { id } })

            return response.status(204).send()
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    }
}