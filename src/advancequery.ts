//
import { prisma } from "./utis/prismaClient";

// ! 1) Find all movies in the "Sci-Fi" genre released before 2015

//! 2) Find users who have both reviewed a movie AND have movies in their watchlist

//! 3) Find reviews with ratings between 3 and 4 stars

//! 4) Get the 3 most recently released movies

//! 5)  Get top 3 movies with highest average ratings

async function main() {
  //   const queryResult = await prisma.movie.findMany({
  //     // ? manual
  //     // where: {
  //     //   genre: "Sci-Fi",
  //     //   releaseDate: { lt: new Date("2015-01-01") },
  //     // },

  //     // update version

  //     where: {
  //       AND: [
  //         {
  //           releaseDate: { lt: new Date("2015-01-01") },
  //         },
  //         {
  //           genre: "Sci-Fi",
  //         },
  //       ],
  //     },
  //   });

  //   const result = await prisma.review.findMany({
  //     where: {
  //       rating: {
  //         lte: 4,
  //         gte: 3,
  //       },
  //     },
  //   });

  //   const result = await prisma.movie.findMany({
  //     orderBy: {
  //       releaseDate: "desc",
  //     },
  //     take: 3,
  //   });

  //  task 2

  // const result = await prisma.user.findMany({
  //   where: {
  //     AND: [
  //       {
  //         review: { some: {} },
  //       },
  //       {
  //         watchList: { some: {} },
  //       },
  //     ],
  //   },
  //   include: {
  //     review: true,
  //     watchList: {
  //       select: {
  //         name: true,
  //       },
  //     },
  //   },
  // });

  // const result = await prisma.movie.findMany({
  //   include: {
  //     review: {
  //       select: {
  //         rating: true,
  //       },
  //     },
  //   },

  //   orderBy: {
  //     review: {
  //       _avg: {
  //         rating: "desc",
  //       },
  //     },
  //   },
  //   take: 3,
  // });

  // ? group kora
  // ? average ber kora
  // abc 3 cdc 4 3, 4, 5, 6,

  const resultAvg = await prisma.review.groupBy({
    by: ["movieId"],
    _avg: {
      rating: true,
    },

    orderBy: {
      _avg: {
        rating: "desc",
      },
    },
    take: 3,
  });

  const mId = await resultAvg.map((m) => m.movieId);

  const result = await prisma.movie.findMany({
    where: {
      id: {
        in: mId,
      },
    },
  });

  console.log(result, "top movies", resultAvg);
}

main();
