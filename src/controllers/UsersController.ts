import { Request, Response } from "express"
import { User } from '../models'

export const UsersController = {
            /* Show all candidates */
    /* Input route: localhost:3000/candidates */
    index: async (request: Request, response: Response) =>  {
        try {
            const users = await User.findAll()
            return response.json(users)
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }

    },

        /* Save a candidate on the database */
    /* Input route: localhost:3000/candidates */
    save: async (request: Request, response: Response) =>   {
        const { name, bio, email, phone, openToWork } = request.body

        try {
            const user = await User.create({
                name,
                bio,
                email,
                phone,
                openToWork
            })

            return response.status(201).json(user)
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },
        /* Show info of a specific candidate */
    /* Input route: localhost:3000/candidates/[id] */
    show:   async (request: Request, response: Response) => {
        const { id } = request.params

        try {
            const users = await User.findByPk(id, {include: 'jobs'})
            return response.json(users)
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },
        /* Update a specific candidate's info */
    /* Input route: localhost:3000/candidates/[id] */
    update: async (request: Request, response: Response) => {
        const { id } = request.params
        const { name, bio, email, phone, openToWork } = request.body

        try {
            const user = await User.findByPk(id)

            if  (user === null)    {
                return response.status(404).json({message: 'Candidate not found! :('})
            }

            user.first_name = name
            user.bio = bio
            user.email = email
            user.phone = phone
            user.openToWork = openToWork

            await user.save()

        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },
    /* Remove a specific candidate from the database*/
    /* Input route: localhost:3000/candidates/[id] */
    delete: async (request: Request, response: Response) => {
        const { id } = request.params

        try {
            await User.destroy({ where: { id } })

            return response.status(204).send()
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    }
}