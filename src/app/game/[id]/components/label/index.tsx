
interface LabelProps{
    data: string
}

export function Label({data}: LabelProps){
    return(
        <p className="bg-purple-800 py-0.5 px-3 rounded-lg select-none hover:font-bold hover:scale-110 transition-all duration-400">
            {data}
        </p>
    )
}