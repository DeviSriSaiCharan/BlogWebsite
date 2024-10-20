import Navbar from "../components/Navbar"
import CarouselSection from "@/components/CarouselSection"


export default function Explore(){


    return (
        <div className="bg-black min-h-screen">
            <Navbar/>
            <main className="text-white mx-auto w-10/12 pt-28  min-h-screen"> 
                <div className="w-full h-96 rounded-lg ">
                    <CarouselSection/>
                </div>
            </main>
        </div>
    )
}