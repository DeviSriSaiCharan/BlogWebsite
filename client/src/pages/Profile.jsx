import Navbar from "@/components/Navbar"
import axios from "axios";
import { Toaster } from "../components/ui/sonner";
import { toast } from "sonner";
import { FunctionSquareIcon } from "lucide-react";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Profile() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfile] = useState("");

  const navigate = useNavigate();

  async function getProfile(){
    const response = await axios.get("http://localhost:3000/api/v1/user/profile",{
      headers : {
        "Content-Type" : "application/json",
      },
      withCredentials : true
    })

    console.log(response);

    if("isValid" in response.data && !response.data.isValid) navigate("/signIn");

    if(!response.data.error){
      setName(response.data.data.username);
      setEmail(response.data.data.email);
      setProfile(response.data.data.profileImage);
      setBio(response.data.data.Bio || "");
    }
    
  }

  async function handleUpdate(e){
    e.preventDefault();

    

    const response = await axios.put("http://localhost:3000/api/v1/user/profile",{
      "username" : name,
      "email" : email,
      "profileImage" : profileImage || null,
      "Bio" : bio || null
      },
      {
        headers : {
          "Content-Type" : "application/json",
        },
        withCredentials : true
      }
    );

    if(response.data.isUpdated) alert(response.data.msg);
  }

  function handleImageChange(e){
    e.preventDefault();

    const image = e.target.files[0];

    if(image){
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = function(){
        setProfile(reader.result);
      }
      reader.onerror = function(){
        console.log(reader.error);
      }
    }

  }

  useEffect(() =>{
    getProfile();
  },[])

  return (
    <div className="bg-black min-h-screen py-4">
        <Navbar/>
        <main className="text-white mx-auto w-10/12 pt-28"> 
          <div className="bg-zinc-900 rounded-2xl py-8 px-14">
            <h1 className="text-4xl font-bold text-left">Profile</h1>
            <form className="my-10 grid grid-cols-2 gap-10">
              <div className="flex gap-6 col-span-2">
                <div>
                  {
                    profileImage ? 
                    (
                      <img className="w-20 h-20 object-cover object-center rounded-full" src={profileImage} alt="" /> 
                    ) : 
                    (
                      <div className="w-20 h-20 rounded-full flex justify-center items-center bg-pink-700">
                        <p className="text-6xl font-medium">{name[0]?.toUpperCase()}</p>
                      </div>
                    )
                  }
                </div>
                <div className="flex flex-col justify-between gap-3">
                  <div className="flex gap-4">
                    <input onChange={handleImageChange} type="file" id="imageInput" accept="image/*" className="hidden"/>
                    <label htmlFor="imageInput" className="text-green-500 font-thin ">Change</label>
                    <button onClick={(e) => {e.preventDefault(); setProfile("")}} className="text-red-500 font-thin">Remove</button>
                  </div>
                  <div>
                    <p className="w-3/4 text-left text-sm text-zinc-500">Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per side.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col max-md:col-span-2 gap-2 ">
                <label className="text-left text-sm " htmlFor="name">Name*</label>
                <input onChange={(e) => setName(e.target.value)} className="rounded-md p-2 bg-zinc-800" type="text" value={name} placeholder="Name" id="name" />
              </div>

              <div className="flex flex-col max-md:col-span-2 gap-2">
                <label className="text-left text-sm " htmlFor="email">Email*</label>
                <input onChange={(e) => setEmail(e.target.value)} className="rounded-md p-2 bg-zinc-800" type="email" value={email} placeholder="Email@gmail.com" id="email" />
              </div>

              <div className="flex flex-col col-span-2 gap-2">
                <label className="text-left text-sm " htmlFor="bio">Short Bio</label>
                <textarea onChange={(e) => setBio(e.target.value)} className="min-h-44 rounded-md p-2 bg-zinc-800" type="text" value={bio} placeholder="Write a brief introduction about yourself (e.g., your passions, profession, or hobbies) in 2-3 sentences" id="bio" />
              </div>

              <div className="col-span-2 flex justify-end items-center">
                <button onClick={handleUpdate} className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-full" >Save</button>
              </div>
            </form>
          </div>
        </main>
    </div>
  )
}
