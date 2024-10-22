import { useState } from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function SignIn(){

    const [isSelect, setIsSelect] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPasssword] = useState('');
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen bg-black flex justify-center items-center">
            <div className="flex flex-col gap-4 w-5/12 text-white">
                <h1 className="text-3xl font-bold">Blog Website</h1>
                <p className="text-4xl font-semibold mb-2">Sign in with your account</p>
                <div className="flex gap-10 items-center justify-between">
                    <button className="bg-zinc-900 w-1/2 py-3 rounded-lg text-sm flex items-center justify-center">Signin with Google</button>
                    <button className="bg-zinc-900 w-1/2 py-3 rounded-lg text-sm flex items-center justify-center">Signin with Github</button>
                </div>
                <hr className="my-3 border-t border-zinc-800 h-0.5"/>

                {isSelect ? <Input setEmail={setEmail} setPasssword={setPasssword} /> : ""}

                {
                    (email && password) ? 
                    <SignInButton email={email} password={password} />
                    :
                    <button onClick={() => setIsSelect(!isSelect)} className="bg-white font-medium text-black py-2 w-full rounded-lg flex items-center justify-center">Continue with Email</button>
                }

                
            </div>
            SignUp
        </div>
    )
}


function Input({setEmail, setPasssword}){

    return (
        <div className="flex flex-col gap-4">
            <input className="py-2 bg-zinc-900 rounded-lg px-3" type="email" placeholder="example@gmail.com" required onChange={(e) => setEmail(e.target.value)}/>
            <input className="py-2 bg-zinc-900 rounded-lg px-3" type="password" placeholder="Password" required onChange={(e) => setPasssword(e.target.value)}/>
        </div>
    )
}

function SignInButton({email, password}){

    const navigate = useNavigate();

    async function signin(){
        const data = await axios.post('http://localhost:3000/api/v1/auth/signIn', {email, password}, {
            headers : {
                'Content-Type' : 'application/json',
            },
            withCredentials : true,            
        });
        
        const response = data.data;

        if(response.isLoggedIn){
            alert(response.msg)
            navigate('/explore')
        }
        else{
            alert(response.msg)
        }
    }

    return (
        <button onClick={signin} className="bg-white font-medium text-black py-2 w-full rounded-lg flex items-center justify-center">Sign in</button>
    )
}