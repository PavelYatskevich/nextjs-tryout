import { getOptionsForVote } from "@/utils/getRandomPokemom";
import { trpc } from "@/utils/trpc";
import React from "react";

export default function Home() {
  const firstPokemon = trpc.getById.useQuery({ id: 1 });
  const secondPokemon = trpc.getById.useQuery({ id: 2 });

  if (firstPokemon.isLoading || secondPokemon.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center align-middle items-center">
      <div className="text-2xl text-center">Which Pokemon is Rounded?</div>
      <div className="p-2"></div>
      <div className="border rounded p-8 flex justify-between max-w-2xl ">
        <div className="w-64 h-64 ">
          <div className="text-xl text-center capitalize ">
            {firstPokemon.data?.name}
          </div>
          <img
            src={firstPokemon.data?.sprites.front_default}
            alt=""
            className="w-full"
          />
        </div>
        <div>vs</div>
        <div className="w-64 h-64 ">
          <div className="text-xl text-center capitalize ">
            {secondPokemon.data?.name}
          </div>
          <img
            src={secondPokemon.data?.sprites.front_default}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
