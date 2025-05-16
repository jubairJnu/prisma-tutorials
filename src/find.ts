import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // ! Find Many
  // const findMovies = await prisma.movie.findMany();

  // console.log(findMovies, "movies");

  // ! find unique

  // const findUnique = await prisma.user.findUnique({
  //   where: {
  //     id: "6ded4eaa-ad97-4af7-84e9-fae3e62c2f98",
  //   },
  //   include: {
  //     watchList: true,
  //   },
  // });
  // ! find first
  // const findFirst = await prisma.user.findFirst({
  //   where: {
  //     password: "123456",
  //   },
  //   include: {
  //     watchList: true,
  //   },
  // });
  // ! find with error
  const findFirst = await prisma.user.findUniqueOrThrow({
    where: {
      email: "shakil@example2.com",
    },
    include: {
      watchList: true,
    },
  });

  console.log(findFirst, "find data");
}

main();
