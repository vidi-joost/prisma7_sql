import { prisma } from "./prisma";
import { DateTime } from "luxon";


await prisma.user.create({
  data: {
    name: "Alice",
  },
})

const startDate = DateTime.now().minus({ minutes: 1000 * 1000 })
for (let i = 0; i < 1000; i++) {
  console.log(`Creating posts batch ${i + 1} of 1000`);
  // Create 1000 posts for Bob
  await prisma.post.createMany({
    data: Array.from({ length: 1000 }).map((_, idx) => ({
      title: `Post ${i * 1000 + idx + 1} by Alice`,
      timestamp: startDate.plus({ minutes: i * 1000 + idx }).toJSDate(),
      userId: 1,
    })),
  })

  console.log(`Finished creating posts batch ${i + 1} of 1000`);
}


process.exit();



