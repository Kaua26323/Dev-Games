"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";

export function Input() {
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  function handleSearchGame(event: FormEvent) {
    event.preventDefault();

    if (input === "") {
      toast.warning("Type a valid game!");
      return;
    }

    router.push(`/game/search/${input}`);
  }

  return (
    <form
      onSubmit={handleSearchGame}
      className="w-full flex items-center justify-between gap-2 bg-purple-900 py-2 px-3 rounded-lg my-3"
    >
      <input
        type="text"
        placeholder="Searching for a game?"
        className="w-11/12  outline-none"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button
        type="submit"
        className="cursor-pointer hover:scale-115 transition-all duration-300 "
      >
        <FiSearch size={20} color="ea580c" />
      </button>
    </form>
  );
}
