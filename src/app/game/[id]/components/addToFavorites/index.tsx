"use client"

import { GameProps } from "@/components/utils/types"
import { toast } from "react-toastify";

interface GameData{
    data: GameProps;
}

export function AddToFavorites({data}:GameData){

    function savedGame(){   
        if (typeof window === "undefined") return;

        const KEY: string = "@favoriteGame";
        let savedGames:GameProps[] = [];

        try{
            const storage = localStorage.getItem(KEY);
            savedGames = storage ? JSON.parse(storage) : [];
        }catch(err){
            toast.error("Oops! Something went wrong!");
            console.log(err);
        }

        const hasGame = savedGames.some( item => item.id === data.id);

        if(hasGame){
            toast.warn("This game has already been saved.");
            return;
        }

        savedGames.push(data);
        localStorage.setItem(KEY, JSON.stringify([...savedGames]));
        toast.success("Game saved on favorites");
    }

    return(
        <button onClick={savedGame}
        className="bg-purple-800 font-bold text-xl px-3 py-2 rounded-lg cursor-pointer hover:scale-110 hover:bg-purple-700 hover:text-gray-400 transition-all duration-500 ">
            Add to Favorites?
        </button>
    )
}