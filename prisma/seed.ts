import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // const email = "jeff@jeff.com";

  // // cleanup the existing database
  // await prisma.user.delete({ where: { email } }).catch(() => {
  //   // no worries if it doesn't exist yet
  // });

  // await prisma.user.create({
  //   data: {
  //     email,
  //     name: "Jeff",
  //     tags: "cool beans, human",
  //     links: ["https://davidhartsough.com/"],
  //     username: "jeff",
  //   },
  // });
  // console.log("Database has been seeded 🌱");
  console.log("Database _can be_ seeded 🌱");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
