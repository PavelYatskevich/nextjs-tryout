import { PokemonClient } from 'pokenode-ts';
import { z } from 'zod';
import { procedure, router } from '../trpc';

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


    // export const appRouter = trpc.router().query("get-pokemon-by-id", {
    //   input: z.object({
    //     id: z.number() }),
    //     async resolve({input}) {
    //       const api  = new PokemonClient();
    
    //       const pokemon = await api.getPokemonById(input.id)
    //       return pokemon
    //     }
    // });
});
// export type definition of API
export type AppRouter = typeof appRouter;