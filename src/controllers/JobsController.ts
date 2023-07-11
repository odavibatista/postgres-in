import { Request, Response } from "express"
import { Job } from '../models'
import { request } from "http"

export const JobsController = {
            /* Show all jobs */
    /* Input route: localhost:3000/jobs */
    index:  async (request: Request, response: Response)    =>  {
        try {
            const jobs = await Job.findAll({include: ['company', 'users']})
            return response.json(jobs)
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },

        /* Save a job on the database */
    /* Input route: localhost:3000/jobs */
    save:   async (request: Request, response: Response)    =>  {
        const { title, description, limitDate, companyId } = request.body

        try {
            const job = await Job.create({
                title,
                description,
                limitDate,
                companyId
            })

            return response.status(201).json(job)
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },

        /* Show info of a specific job */
    /* Input route: localhost:3000/jobs/[id] */
    show:   async (request: Request, response: Response)    =>  {
        const { id } = request.params

        try {
            const job = await Job.findByPk(id, { include: ['company', 'users']})
            const candidatesCount = await job?.countCandidates()
            return response.json({ ...job?.get(), candidatesCount })
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },

    /* Update a specific job's info */
    /* Input route: localhost:3000/jobs/[id] */
    update: async (request: Request, response: Response)    =>  {
        const { id } = request.params
        const { title, description, limitDate, companyId } = request.body

        try {
            const [affectedRows, jobs] = await Job.update({
                title,
                description,
                limitDate,
                companyId
            }, {
                where: { id },
                returning: true
            })

            return response.json(jobs[0])

        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },
        /* Remove a specific job from the database*/
    /* Input route: localhost:3000/jobs/[id] */
    delete: async (request: Request, response: Response) => {
        const { id } = request.params

        try {
            await Job.destroy({ where: { id } })

            return response.status(204).send()
        } catch (error) {
            if  (error instanceof Error)    {
                return response.status(400).json({message: error.message})
            }
        }
    },
    
    addCandidate: async (req: Request, res: Response) => {
        const jobId = req.params.id
        const { candidateId } = req.body

        try {
            const job = await Job.findByPk(jobId)

            if (job === null) return res.status(404).json({ message: 'Job offer not found.' })

            await job.addCandidate(candidateId)

            return res.status(201).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    removeCandidate: async (req: Request, res: Response) => {
        const jobId = req.params.id
        const { candidateId } = req.body

        try {
            const job = await Job.findByPk(jobId)

            if (job === null) return res.status(404).json({ message: 'Job offer not found.' })

            await job.removeCandidate(candidateId)

            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },
}