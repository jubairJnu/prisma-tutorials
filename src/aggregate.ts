// ! Tasks ....

import { prisma } from "./utis/prismaClient";

//? 1:  Retrive How much review Exist. and give total reviews by each movie
//? 2:  Retrive Each Movie Avg rating.
//? 3: Which movie have how much rating sum.
//? 4:  who gives min rating. which movie have max rating.
//? 5:  top 2 avg rating movie.
//? 6:  give which movies avg rating is greater than 4

//
async function main() {
  // 1
  //   const result = await prisma.review.count();

  //   const result = await prisma.review.groupBy({
  //     by: ["movieId"],
  //     _count: { id: true },
  //   });

  // ? 2

  //   const result = await prisma.review.groupBy({
  //     by: ["movieId"],
  //     _avg: {
  //       rating: true,
  //     },
  //   });

  // ?3

  // const result = await prisma.review.groupBy({
  //   by: ["movieId"],
  //   _sum: {
  //     rating: true,
  //   },
  // });
  //? 4
  //   const result = await prisma.review.groupBy({
  //     by: ["userId"],
  //     _min: {
  //       rating: true,
  //     },
  //   });
  //   const result = await prisma.review.groupBy({
  //     by: ["movieId"],
  //     _max: {
  //       rating: true,
  //     },
  //   });
  //
  //   ?6
  //   const result = await prisma.review.groupBy({
  //     by: ["movieId"],
  //     _avg: {
  //       rating: true,
  //     },
  //     having: {
  //       rating: {
  //         _avg: {
  //           gte: 3,
  //         },
  //       },
  //     },
  //   });
  //

  // ?5
  const result = await prisma.review.groupBy({
    by: ["movieId"],
    _avg: {
      rating: true,
    },
    // having: {
    //   rating: {
    //     _avg: {
    //       gte: 3,
    //     },
    //   },
    // },
    // 1, 2, 3

    orderBy: {
      _avg: {
        rating: "asc",
      },
    },
    take: 2,
    // skip: 1,
  });

  console.log(result, "result");
}

main();
