import { PrismaClient } from '../generated/prisma'

const prismaQuery = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

export default prismaQuery;
