import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const findMovies = await prisma.movie.findMany();

  console.log(findMovies, "movies");
}

main();
