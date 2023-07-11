import { Request, Response } from "express"
import { Company } from '../models'

export const CompaniesController = {
                /* Show all companies */
    /* Input route: localhost:3000/companies */
    index: async (request: Request, response: Response) =>  {
        try {
            const companies = await Company.findAll()
            return response.json(companies)
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },
        /* Save a company on the database */
    /* Input route: localhost:3000/companies */
    save: async (request: Request, response: Response) =>   {
        const { name, bio, website, email } = request.body

        try {
            const company = await Company.create({
                name,
                bio,
                website,
                email
            })

            return response.status(201).json(company)
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
            const company = await Company.findByPk(id, {include: 'jobs'})
            return response.json(company)
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
        const { name, bio, website, email } = request.body

        try {
            const [affectedRows, companies] = await Company.update({
                name,
                bio,
                website,
                email
            }, {
                where: { id },
                returning: true
            })

            return response.json(companies[0])

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
            await Company.destroy({ where: { id } })

            return response.status(204).send()
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    }
}