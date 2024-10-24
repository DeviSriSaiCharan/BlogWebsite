import { Search } from 'lucide-react';


export default function Navbar(){

    return (
        <nav className="z-10 mx-auto rounded-lg flex px-14 h-16 fixed top-4 left-[8%] py-2 w-10/12 bg-zinc-900 justify-between items-center">
           <div className="font-bold text-2xl text-white">
            BW
           </div>

            <div className="w-3/5 flex gap-3 items-center">
                <input className="w-full px-4 py-2 text-white rounded-lg bg-zinc-800" type="search" />
                <Search color='#3f3f46' className='cursor-pointer' />
            </div>

           <div>
            <div className="rounded-full h-10 w-10 bg-pink-600"></div>
           </div> 
        </nav>
    )
}

