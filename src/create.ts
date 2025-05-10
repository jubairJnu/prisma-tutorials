import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       name: "Rahim",
  //       email: "rahim@example.com",
  //       password: "123456",
  //     },
  //   });
  //   console.log(createUser, "create user response");

  // ? create multiple movie

  const createMovie = await prisma.movie.createMany({
    data: [
      {
        name: "Inception",
        releaseDate: "2010-07-16T00:00:00.000Z",
        director: "Christopher Nolan",
        genre: "Science Fiction",
      },
      {
        name: "The Godfather",
        releaseDate: "1972-03-24T00:00:00.000Z",
        director: "Francis Ford Coppola",
        genre: "Crime",
      },
      {
        name: "Spirited Away",
        releaseDate: "2001-07-20T00:00:00.000Z",
        director: "Hayao Miyazaki",
        genre: "Animation",
      },
    ],
  });

  console.log(createMovie, "movei");
}

main();
