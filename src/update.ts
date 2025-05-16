import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const updateUser = await prisma.user.update({
    where: {
      email: "shakib1@example.com",
    },
    data: {
      name: "Shakib Khan Star",
      //   watchList: {
      //     connect: [{ id: "d349dff8-9f7d-4f74-af6e-05858884ec10" }],
      //   },
    },
    // include: {
    //   watchList: true,
    // },
  });

  console.log(updateUser, "upated users");
}

main();
