// ! Tasks ....

import { prisma } from "./utis/prismaClient";

//? 1:  Retrive How much review Exist. and give total reviews by each movie
//? 2:  Retrive Each Movie Avg rating.
//? 3: Which movie have how much review sum.
//? 4:  who gives min rating. which movie have max rating.
//? 5:  top 3 avg rating movie.
//? 6:  give which movies avg rating is greater than 4

//
async function main() {
  const result = await prisma.review.count();

  console.log(result);
}

main();
