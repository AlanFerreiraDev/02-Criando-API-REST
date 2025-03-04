import { knex as setupKanex } from 'knex'

export const knex = setupKanex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
