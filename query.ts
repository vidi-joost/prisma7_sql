import { prisma } from "./prisma";

const result = await prisma.user.findFirstOrThrow({
  where: {
    id: 1
  },
  select: {
    name: true,
    posts: {
      orderBy: {
        timestamp: 'desc'
      },
      take: 1,
      select: {
        title: true,
        timestamp: true,
      }
    }
  }
})

console.log(result);
process.exit();