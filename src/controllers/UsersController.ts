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
        const { firstName, lastName, email, phone, bio, about, birthDate, role, password, openToWork } = request.body

        try {
            const user = await User.create({
                firstName,
                lastName,
                email,
                phone,
                bio,
                about,
                birthDate,
                role,
                password,
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
        const { firstName, lastName, email, phone, bio, about, birthDate, role, password, openToWork } = request.body

        try {
            const user = await User.findByPk(id)

            if  (user === null)    {
                return response.status(404).json({message: 'Candidate not found! :('})
            }

            user.firstName = firstName,
            user.lastName = lastName,
            user.email = email,
            user.phone = phone,
            user.bio = bio,
            user.about = about,
            user.birthDate = birthDate,
            user.role = role,
            user.password = password,
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