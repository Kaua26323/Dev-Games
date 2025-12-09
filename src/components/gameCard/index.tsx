"use client";

import Link from "next/link";
import { GameProps } from "../utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface CardProps {
  data: GameProps;
  profile: boolean;
  onDelete?: () => void;
}

export function GameCard({ data, profile, onDelete }: CardProps) {
  const [isProfile] = useState(profile);

  function handleDelete(id: number) {
    if (typeof window === "undefined") return;

    try {
      const KEY: string = "@favoriteGame";
      const storage = localStorage.getItem(KEY);
      const gameList: GameProps[] = storage ? JSON.parse(storage) : [];
      const removedGame = gameList.filter((item) => item.id !== id);

      localStorage.setItem(KEY, JSON.stringify(removedGame));
      toast.success("Deleted");
      onDelete?.();
    } catch (err) {
      toast.error("Something went wrong...");
      console.log(err);
    }
  }

  return (
    <article className="w-full bg-purple-950 p-3 rounded-lg">
      <Link href={`/game/${data.id}`}>
        <div className="relative w-full h-56 hover:scale-103 transition-all duration-300">
          <Image
            src={data.image_url}
            alt={data.title}
            priority
            fill={true}
            quality={100}
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 44vw"
          />
        </div>
      </Link>
      <div className="flex items-center justify-between gap-1 mt-2">
        <h1 className="text-xl font-bold text-ellipsis truncate">
          {data.title}
        </h1>

        {isProfile ? (
          <button
            onClick={() => handleDelete(data.id)}
            className="cursor-pointer hover:scale-110 transition-all duration-500"
          >
            <FaTrash size={19} color="#eb0606" />
          </button>
        ) : (
          <p>
            <FaRegArrowAltCircleRight size={20} />
          </p>
        )}
      </div>
    </article>
  );
}
