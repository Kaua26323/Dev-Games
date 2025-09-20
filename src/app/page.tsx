import { Container } from "@/components/container";
import { GameCard } from "@/components/gameCard";
import { Input } from "@/components/input";
import { GameProps } from "@/components/utils/types";
import Image from "next/image";
import Link from "next/link";
import { LuSquareArrowRight } from "react-icons/lu";

async function fetchGameDay(){
  try{
    const response = await fetch(`${process.env.NEXT_URL_API}/next-api/?api=game_day`, {next: {revalidate: 120}});
    const data = await response.json();
    return data;

  }catch(err){
    throw new Error("Oops! Something went wrong while fetching the request.");
  }
}

async function getGameList(){
  try{
    const res = await fetch(`${process.env.NEXT_URL_API}/next-api/?api=games`, {next: {revalidate: 60}});
    const data = await res.json();
    return data;
  }catch(err){
    throw new Error("Oops! Something went wrong while fetching the request.");
  }
}

export default async function Home(){
  const gameDay: GameProps = await fetchGameDay();
  const gameList: GameProps[] = await getGameList();

  return (
    <div className="w-full bg-gray-950 min-h-screen pb-6">
      <Container>
        <h1 className="text-xl font-bold py-5">We've picked an exclusive game just for you</h1>

        <Link href={`/game/${gameDay.id}`} >
          <section className="w-full bg-black rounded-lg">

            <div className="w-full h-76 relative rounded-lg sm:h-96 sm:max-h-96 ">
              <Image src={gameDay.image_url} alt={gameDay.title}
              priority
              fill={true}
              quality={100}
              className="h-76 object-cover sm:h-96 opacity-55 hover:opacity-100 hover:scale-101 rounded-lg transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 44vw"
              />

              <div className="w-full flex items-center justify-start  gap-1.5 absolute z-20 bottom-2 px-3">
                <h1 className="text-white font-bold text-2xl ">{gameDay.title}</h1>

                <h2 className="pt-1">
                  <LuSquareArrowRight size={23} color="FFF"/>
                </h2>
              </div>
            </div>
          </section>
        </Link>

        <Input/>

        <h1 className="text-start font-bold mt-5 mb-3">Games to Discover</h1>

        <section className="w-full gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {gameList && gameList.map((game) => (
            <GameCard key={game.id} data={game} profile={false}/>
          ))}

        </section>
      </Container>
    </div>
  );
}
