import { prisma } from "./prisma";
import { DateTime } from "luxon";

await prisma.user.create({
  data: {
    name: "Alice",
    posts: {
      createMany: {
        data: [{
          title: "First Post",
          timestamp: DateTime.now().minus({ days: 1 }).toJSDate(),
        },
        {
          title: "Second Post",
          timestamp: DateTime.now().toJSDate(),
        }
        ]
      }
    }
  }
})

process.exit();



