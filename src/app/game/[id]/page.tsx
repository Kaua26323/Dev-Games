import { Container } from "@/components/container";
import { GameProps } from "@/components/utils/types";
import Image from "next/image";
import { Label } from "./components/label";
import { GameCard } from "@/components/gameCard";
import { AddToFavorites } from "./components/addToFavorites";
import { Metadata } from "next";

interface ParamsProps{
    params: {
        id: string;
    }
}

interface MetadataParamsProps{
    params: Promise<{id: string}>
}

export async function generareMetadata({params}: MetadataParamsProps): Promise<Metadata>{
    const {id} = await params;
    try {
        const response: GameProps = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { next: { revalidate: 60 } })
        .then((res) => res.json())
        .catch(() => {
            return {
            title: "DevGames - Choose! Play! Have fun!",
            }
        })

        return {
        title: response.title,
        description: `${response.description.slice(0, 100)}...`,
        openGraph: {
            title: response.title,
            images: [response.image_url]
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            }
        }
        }

    } catch (error) {
        return {
        title: "DevGames - Choose! Play! Have fun!",
        }
    }

}


async function getGameDetails(id: string){
    try{
        const response = await fetch(`${process.env.NEXT_URL_API}/next-api/?api=game&id=${id}`, {next: {revalidate: 60}});
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
        throw new Error("Oops! Something went wrong while fetching the request.");
    }
}

async function getRecommendedGame(){
    try{
        const response = await fetch(`${process.env.NEXT_URL_API}/next-api/?api=game_day`, {cache: 'no-store'})
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
        throw new Error("Oops! Something went wrong while fetching the request.");
    }
}

export default async function GameDetails({params}: ParamsProps){
    const id = params.id;
    const gameInfo: GameProps = await getGameDetails(id);
    const recommendedGame: GameProps = await getRecommendedGame();

    return(
        <div className="w-full min-h-[calc(100dvh-5.75rem)] bg-gray-900 pb-15">
            <Container>
                <div className="w-full h-76 relative rounded-lg sm:h-96 sm:max-h-96">
                    <Image src={gameInfo.image_url} alt={gameInfo.title}
                    priority
                    fill={true}
                    quality={100}
                    className="h-76 object-cover sm:h-96 rounded-b-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 44vw"
                    />
                </div>


                <article className="w-full my-5">
                    <h2 className="font-bold text-2xl text-center mb-2 sm:text-start">{gameInfo.title}</h2>
                    <p>{gameInfo.description}</p>
                </article>

                <article className="flex justify-center sm:justify-normal">
                    <AddToFavorites data={gameInfo}/>
                </article>

                <article className="w-full flex flex-col justify-center items-center flex-wrap gap-1 my-5 sm:items-start">
                    <h2 className="text-xl font-bold"> Available Platforms: </h2>
                    <div className="flex items-center justify-center gap-3 sm:justify-normal">
                        {gameInfo.platforms.map((item) => (
                            <p key={item}
                            className="bg-purple-800 py-0.5 px-3 rounded-lg hover:font-bold hover:scale-110 transition-all duration-400" >
                                {item}
                            </p>
                        ))}
                    </div>
                </article>

                <article className="w-full flex flex-col justify-center items-center flex-wrap gap-1 my-5 sm:items-start">
                    <h2 className="text-xl font-bold"> Game Categories:: </h2>
                    <div className="flex items-center justify-center gap-3 sm:justify-normal">
                        {gameInfo.platforms.map((item) => (
                            <Label key={item} data={item}/>
                        ))}
                    </div>
                </article>
                
                <article className="flex flex-col flex-wrap items-center justify-center font-bold text-xl my-6 sm:flex-row sm:gap-2 sm:justify-normal">
                    <h2>Release Date:</h2>
                    <p>{gameInfo.release}</p>
                </article>
                
                <article className="w-full flex flex-col gap-2 sm:max-w-86">
                    <h2 className="font-bold text-xl self-center sm:self-start">Recommended Game:</h2>
                    <GameCard data={recommendedGame} profile={false}/>

                </article>

            </Container>
        </div>
    )
}