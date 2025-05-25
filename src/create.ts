import { prisma } from "./utis/prismaClient";

async function main() {
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "Shakib Khan",
  //     email: "shakib1@example.com",
  //     password: "123456",
  //     watchList: {
  //       connect: [{ id: "a475333d-50b3-46b0-8cf8-f09ae0d9a6af" }],
  //     },
  //   },
  //   include: {
  //     watchList: true,
  //   },
  // });

  // console.log(createUser, "create user response");

  // ? create multiple movie

  // const createMovie = await prisma.movie.createMany({
  //   data: [
  //     {
  //       name: "Inception",
  //       releaseDate: "2010-07-16T00:00:00.000Z",
  //       director: "Christopher Nolan",
  //       genre: "Science Fiction",
  //     },
  //     {
  //       name: "The Godfather",
  //       releaseDate: "1972-03-24T00:00:00.000Z",
  //       director: "Francis Ford Coppola",
  //       genre: "Crime",
  //     },
  //     {
  //       name: "Spirited Away",
  //       releaseDate: "2001-07-20T00:00:00.000Z",
  //       director: "Hayao Miyazaki",
  //       genre: "Animation",
  //     },
  //   ],
  // });

  // console.log(createMovie, "movei");
  // await prisma.review.createMany({
  //   data: [
  //     {
  //       rating: 5,
  //       comment: "Mind-blowing visuals and concept!",
  //       movieId: "a475333d-50b3-46b0-8cf8-f09ae0d9a6af", // Inception
  //       userId: "0edf36d2-5f5d-44f1-ba8a-38f6024b29e8", // Rahim
  //     },
  //     {
  //       rating: 4,
  //       comment: "A cinematic masterpiece with great storytelling.",
  //       movieId: "d349dff8-9f7d-4f74-af6e-05858884ec10", // The Godfather
  //       userId: "6ded4eaa-ad97-4af7-84e9-fae3e62c2f98", // Shawon
  //     },
  //     {
  //       rating: 5,
  //       comment: "Beautiful animation and touching story.",
  //       movieId: "2aa2ef87-eb3a-49f8-8591-54a9535a78a7", // Spirited Away
  //       userId: "868e0812-bd64-421d-ad83-be55237ff683", // Shakil
  //     },
  //     {
  //       rating: 4,
  //       comment: "Inception made me think deeply—great job Nolan!",
  //       movieId: "a475333d-50b3-46b0-8cf8-f09ae0d9a6af",
  //       userId: "7c3bc77a-1488-47d1-8ef8-b49f789e5ee7", // Shakib
  //     },
  //     {
  //       rating: 3,
  //       comment: "Good but slightly overrated in my opinion.",
  //       movieId: "d349dff8-9f7d-4f74-af6e-05858884ec10",
  //       userId: "62fc565c-633c-4e8c-aca5-b030b1e94d09", // Shakib Khan Star
  //     },
  //     {
  //       rating: 5,
  //       comment: "Every frame is a piece of art in Spirited Away.",
  //       movieId: "2aa2ef87-eb3a-49f8-8591-54a9535a78a7",
  //       userId: "0edf36d2-5f5d-44f1-ba8a-38f6024b29e8",
  //     },
  //     {
  //       rating: 4,
  //       comment: "The Godfather set the standard for crime dramas.",
  //       movieId: "d349dff8-9f7d-4f74-af6e-05858884ec10",
  //       userId: "6ded4eaa-ad97-4af7-84e9-fae3e62c2f98",
  //     },
  //     {
  //       rating: 5,
  //       comment: "No movie has messed with my mind like Inception!",
  //       movieId: "a475333d-50b3-46b0-8cf8-f09ae0d9a6af",
  //       userId: "868e0812-bd64-421d-ad83-be55237ff683",
  //     },
  //     {
  //       rating: 4,
  //       comment: "Hayao Miyazaki is a genius. Spirited Away proves it.",
  //       movieId: "2aa2ef87-eb3a-49f8-8591-54a9535a78a7",
  //       userId: "7c3bc77a-1488-47d1-8ef8-b49f789e5ee7",
  //     },
  //     {
  //       rating: 3,
  //       comment: "Well directed but a bit too long for my taste.",
  //       movieId: "d349dff8-9f7d-4f74-af6e-05858884ec10",
  //       userId: "62fc565c-633c-4e8c-aca5-b030b1e94d09",
  //     },
  //   ],
  // });

  await prisma.movie.createMany({
    data: [
      {
        name: "Inception",
        releaseDate: new Date("2010-07-16"),
        director: "Christopher Nolan",
        genre: "Sci-Fi",
      },
      {
        name: "The Shawshank Redemption",
        releaseDate: new Date("1994-09-23"),
        director: "Frank Darabont",
        genre: "Drama",
      },
      {
        name: "The Dark Knight",
        releaseDate: new Date("2008-07-18"),
        director: "Christopher Nolan",
        genre: "Action",
      },
      {
        name: "Pulp Fiction",
        releaseDate: new Date("1994-10-14"),
        director: "Quentin Tarantino",
        genre: "Crime",
      },
      {
        name: "Parasite",
        releaseDate: new Date("2019-05-21"),
        director: "Bong Joon Ho",
        genre: "Thriller",
      },
    ],
  });
}

main();
