import { createTRPCRouter, publicProcedure } from "../trpc";

export const gameRouter = createTRPCRouter({
  getGames: publicProcedure.query(async ({ ctx }) => {
    const games = await ctx.prisma.game.findMany({
      include: {
        paymentInfos: true,
      },
    });
    return games;
  }),
});
