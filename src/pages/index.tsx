import { getOptionsForVote } from "@/utils/getRandomPokemom";
import { trpc } from "@/utils/trpc";
import React, { useState } from "react";

export default function Home() {
  const [ids, updateids] = useState(() => getOptionsForVote());
  const [firstId, secondId] = ids;
  const firstPokemon = trpc.getById.useQuery({ id: firstId });
  const secondPokemon = trpc.getById.useQuery({ id: secondId });

  if (firstPokemon.isLoading || secondPokemon.isLoading) {
    return <div>Loading...</div>;
  }

  const voteForRoundest = (selected: number) => {
    updateids(getOptionsForVote());
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center align-middle items-center">
      <div className="text-2xl text-center">Which Pokemon is Rounded?</div>
      <div className="p-2"></div>
      <div className="border rounded p-8 flex justify-between max-w-2xl ">
        {!firstPokemon.isLoading &&
        firstPokemon.data &&
        !secondPokemon.isLoading &&
        secondPokemon.data ? (
          <>
            <PokemonListing
              pokemon={firstPokemon.data}
              vote={() => voteForRoundest(firstId)}
            />
            <div>vs</div>
            <PokemonListing
              pokemon={secondPokemon.data}
              vote={() => voteForRoundest(secondId)}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

const PokemonListing: React.FC<{ pokemon: any; vote: () => void }> = (
  props
) => {
  return (
    <div className=" flex flex-col items-center">
      <div className="text-xl text-center capitalize ">
        {props.pokemon.name}
      </div>
      <img
        src={props.pokemon.sprites.front_default}
        alt=""
        className="w-full w-64 h-64"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={props.vote}
      >
        Rounded
      </button>
    </div>
  );
};
