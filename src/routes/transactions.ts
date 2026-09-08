import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { knex } from '../database'

export function transactionRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body
    )
    const amountFiltered = type === 'credit' ? amount : amount * -1

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: amountFiltered,
    })

    return reply.status(201).send()
  })
}
