import { Container } from "@/components/container";
import { GameCard } from "@/components/gameCard";
import { Input } from "@/components/input";
import { GameProps } from "@/components/utils/types";

interface ParamsProps{
    params: {
        title: string
    }
}

async function getGameByName(title: string){
    try{
        const response = await fetch(`${process.env.NEXT_URL_API}/next-api/?api=game&title=${title}`);
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
        throw new Error("Oops! Something went wrong while fetching the request.");
    }
}

export default async function SearchGameByName({params}: ParamsProps){
    const title = params.title;
    const decodeTitle = decodeURI(title);
    const searchGame: GameProps[] = await getGameByName(decodeTitle);

    return(
        <div className="w-full min-h-[calc(100dvh-5.75rem)] bg-gray-950 py-6">
            <Container>

                <Input/>

                <h1 className="text-3xl font-bold text-center mb-5">Search results for: {decodeTitle}</h1>
                
                {searchGame ? (
                    <h2 className="font-bold text-xl text-start mb-3">Here's what we found in our database:</h2>
                ) : (
                    <h2 className="font-bold text-2xl text-center text-red-600">Game not found...</h2>
                )}

                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {searchGame && searchGame.map((game) => (
                        <GameCard key={game.id} data={game} profile={false}/>
                    ))}
                </section>
            </Container>
        </div>
    )
}