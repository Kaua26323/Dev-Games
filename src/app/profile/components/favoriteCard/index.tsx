"use client"
import { FiEdit, FiX} from "react-icons/fi"
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { Input } from "@/components/input";

export function FavoriteCard(){
    const [showInput, setShowInput] = useState<boolean>(false);

    function addFavoriteGame(){
        setShowInput(!showInput);
    }

    return(
        <div className="w-full bg-purple-950 flex flex-col justify-between items-start h-46 rounded-lg px-3 py-3">
            {showInput ? (
                <div className="w-full flex gap-2">
                    <Input/>
                    <button onClick={addFavoriteGame}
                    className="cursor-pointer hover:scale-105 transition-all duration-300">
                        <FiX size={30} color="FFF"/>
                    </button>
                </div>
                    
            ) 
            : (
                <button onClick={addFavoriteGame}
                 className="cursor-pointer hover:scale-105 transition-all duration-300">
                    <FiEdit size={30} color="fff"/>
                </button>
            )}

            <Link href="/" data-success={showInput} className="data-[success=true]:opacity-20 self-center cursor-pointer hover:scale-105 transition-all duration-300">
                <FaCirclePlus size={70} color="fff"/>
            </Link>

            <p className="font-bold text-lg">Add Game</p>
        </div>
    )
}