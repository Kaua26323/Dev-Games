"use client"

import { Container } from "@/components/container";
import userLogo from  "../../../public/user.png";
import { FaShareAlt } from "react-icons/fa";
import Image from "next/image";
import { FavoriteCard } from "./components/favoriteCard";
import { GameCard } from "@/components/gameCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GameProps } from "@/components/utils/types";

export default function Profile(){
    const [favorites, setFavorites] = useState<GameProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getFavoritesData();
    }, []);

      function getFavoritesData(){
            try{
                const storage = localStorage.getItem("@favoriteGame");
                const data:GameProps[] = storage ? JSON.parse(storage) : [];
                setFavorites(data);
    
            }catch(err){
                toast.error("Oops! Something went wrong!");
                console.log(err);
    
            } finally {
                setLoading(false);
            }
        }

    return(
        <div className="w-full min-h-[calc(100dvh-5.75rem)] bg-gray-900 py-8">
            <Container>
                <section className="w-full bg-purple-950 relative flex flex-col items-center justify-between rounded-lg px-2 py-2 mb-5 gap-3 sm:flex-row">
                    <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
                        <Image src={userLogo} alt="User Logo"
                        quality={100}
                        priority
                        className=" object-cover rounded-full h-56 w-56"/>

                        <h1 className="font-bold text-2xl">Sujeito Programador</h1>
                    </div>

                    <article className="sm:absolute top-0 right-2.5 gap-3 flex items-center justify-center mt-2">
                        <button className="bg-purple-800 py-2 px-3 rounded-lg cursor-pointer font-bold text-xl hover:scale-110 transition-all duration-300">
                            Settings
                        </button>

                        <button className="bg-purple-800 py-2 px-3 rounded-lg cursor-pointer
                        hover:scale-110 transition-all duration-300">
                            <FaShareAlt size={28} color="fff"/>
                        </button>
                    </article>
                </section>

                <h2 className="font-bold text-xl my-1 text-center sm:text-start sm:text-2xl">Favorites Games:</h2>

                <section className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {!loading && favorites.map((item) => (
                        <GameCard key={item.id} data={item} profile={true} onDelete={getFavoritesData}/>
                    ))}
                    <FavoriteCard/>
                </section>
            </Container>
        </div>
    )
}