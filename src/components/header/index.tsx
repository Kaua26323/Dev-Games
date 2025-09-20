import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { RandomGame } from "../randomGame/infex";

export function Header(){

    
    function activeRandomGame(){
        
    }

    return(
        <header className="w-full flex items-center justify-center bg-purple-900 h-23">
            <main className="w-full max-w-7xl flex items-center justify-between px-5">
                <nav className="flex gap-3 items-center font-bold text-xl text-white">
                    <Link href="/"  className="text-2xl hover:scale-110 hover:text-gray-400 transition-all duration-300">
                        Dev<span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">Games</span>
                    </Link>

                    <Link href="/"  className="pt-1 hover:scale-110 hover:text-gray-400  transition-all duration-300">
                        Games
                    </Link>
                    
                    <div className="w-full flex items-center justify-center pt-3">
                        <RandomGame/>   
                    </div>
                    
                </nav>

                <Link href="/profile" className="hover:scale-110 hover:text-gray-400  transition-all duration-300">
                    <FaUserCircle size={35} color="#fff"/>
                </Link>
            </main>

        </header>
    )
}