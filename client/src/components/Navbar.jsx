import useAuth from '@/hooks/useAuth';
import { Search, SquarePen, UserPen,  BookMarked, PencilLine, BookHeart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function Navbar(){

    const navigate = useNavigate();
    const isLoggedIn = useAuth();


    return (
        <nav className="z-10 mx-auto rounded-lg flex px-14 h-16 fixed top-4 left-[8%] py-2 w-10/12 bg-zinc-900 justify-between items-center">
           <div className="font-bold text-2xl text-white cursor-pointer" onClick={() => navigate('/explore')}>
            BW
           </div>

            <div className="w-3/5 flex gap-3 items-center">
                <input className="w-full px-4 py-2 text-white rounded-lg bg-zinc-800" type="search" />
                <Search color='#3f3f46' className='cursor-pointer' />
            </div>

            {/* {
                isLoggedIn ? (
                    <div className='flex items-center gap-16'>
                        <SquarePen color='#3f3f46' className='cursor-pointer hover:text-white' onClick={() => navigate('/write')}/>
                        <div className="rounded-full h-10 w-10 bg-pink-600"></div>
                    </div>
                ) : (
                    <div className="flex gap-3 items-center">
                        SignUp
                    </div>
                )
            } */}

            <div className='flex items-center gap-16'>
                <SquarePen color='#3f3f46' className='cursor-pointer hover:text-white' onClick={() => navigate('/write')}/>
                {/* <div onClick={() => navigate('/profile')} className="rounded-full h-10 w-10 bg-pink-600"></div> */}
                <Popover>
                    <PopoverTrigger className='rounded-full h-10 w-10 bg-pink-600'></PopoverTrigger>
                    <PopoverContent className="w-48 flex flex-col gap-4 text-zinc-600">
                        <div className='cursor-pointer hover:text-black hover:font-medium flex gap-4 items-center' onClick={() => navigate("/profile")}>
                            <UserPen size={20} strokeWidth={1}/>
                            <div className="">Profile</div>
                        </div>
                        <div onClick={() => navigate('/library')} className='cursor-pointer hover:text-black hover:font-medium flex gap-4 items-center' >
                            <BookMarked size={19} strokeWidth={1}/>
                            <div className="">Library</div>
                        </div>
                        <div className='cursor-pointer hover:text-black hover:font-medium flex gap-4 items-center' >
                            <PencilLine size={20} strokeWidth={1}/>
                            <div className="">Writings</div>
                        </div>
                        <div onClick={() => navigate("/likedblogs")} className='cursor-pointer hover:text-black hover:font-medium flex gap-4 items-center' >
                            <BookHeart size={20} strokeWidth={1}/>
                            <div className="">Liked Blogs</div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
            
        </nav>
    )
}

