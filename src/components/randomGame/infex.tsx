"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { GameProps } from "../utils/types";
import { GameCard } from "../gameCard";

export function RandomGame() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [randomGame, setRandomGame] = useState<GameProps>();
  const [loading, setLoading] = useState<boolean>(false);

  async function activeRandomGame() {
    if (!isOpen) {
      setIsOpen(true);
      setLoading(true);
      await createRandomGame();
    } else {
      setIsOpen(false);
    }
  }

  async function createRandomGame() {
    try {
      const response = await fetch(
        `https://sujeitoprogramador.com/next-api/?api=game_day`,
        { cache: "no-store" }
      );
      const data = await response.json();
      setRandomGame(data);
    } catch (err) {
      toast.error("Oops! Something went wrong while fetching the request.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full min-h-[calc(100dvh-5.75rem)] flex items-center pb-2">
      <button
        onClick={activeRandomGame}
        className="hover:scale-110 hover:text-gray-400  transition-all duration-300"
      >
        RandowGame
      </button>

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="w-full bg-purple-800 p-4 rounded shadow-lg max-w-3xs flex items-center justify-center relative z-50 opacity-100">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-white"></div>
          </div>
        </div>
      )}

      {!loading && isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="w-full bg-purple-800 p-4 rounded shadow-lg max-w-96 flex items-center justify-center relative z-50 opacity-100 sm:max-w-2xl">
            <div className="w-full flex flex-col gap-3">
              <h1 className="text-center text-2xl">Random Game:</h1>

              <button onClick={() => activeRandomGame()}>
                {randomGame && <GameCard data={randomGame} profile={false} />}
              </button>

              <div className="w-full flex flex-col gap-1">
                <button
                  onClick={createRandomGame}
                  className=" w-full bg-purple-950 rounded-lg py-1.5 cursor-pointer hover:scale-105 transition-all duration-500"
                >
                  Try Again
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-red-600 rounded-lg py-1.5 cursor-pointer hover:scale-105 transition-all duration-500"
                >
                  Leave
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
