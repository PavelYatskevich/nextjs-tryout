
import { PokemonClient } from 'pokenode-ts';
import { z } from 'zod';
import { procedure, router } from '../trpc';
import {prisma} from "@/server/utils/prisma"

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
    getById: procedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async({input}) => {
      const api  = new PokemonClient();

      const pokemon = await api.getPokemonById(input.id)
      return { name: pokemon.name, sprites: pokemon.sprites}

    }),
    vote: procedure
    .input(z.object({ 
      votedFor: z.number(),
      votedAgainst: z.number()
    }))
    .mutation(async ({input}) => {

      const voteInDb = await prisma.vote.create({ data: {
        ...input
      }})
      return { success: true, vote: voteInDb}
    })



});
// export type definition of API
export type AppRouter = typeof appRouter;