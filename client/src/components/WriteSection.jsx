import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function WriteSection() {

    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const titleRef = useRef();
    const contentRef = useRef();
    const navigate = useNavigate();

    function handleImageChange(e){

        const file = e.target.files[0];
   
        if(file){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function(){
                setImage(reader.result);
            }
            reader.onerror = () =>{
                console.error("Failed to convert file to base64");
            }
        }
    }

    async function authCheck(){
        try{
            const response = await axios.get('http://localhost:3000/api/v1/auth/authCheck',{
                headers : {
                    "Content-Type" : "application/json",
                },
                withCredentials : true,
            });
            
            console.log(response.data.isLoggedIn);
            if(!response.data.isLoggedIn) navigate('/signIn');

        }
        catch(err){
            console.log(err);
            navigate('/signIn');
        }
    }

    useEffect(()=>{
        authCheck();
    },[])

    async function publishBlog(){
        const title = titleRef.current.textContent;
        const content = contentRef.current.textContent;

        if(title && content && image){

            try{
                const response = await axios.post("http://localhost:3000/api/v1/blog/", {title, content, image},
                    {
                        headers : {
                            "Content-Type" : "application/json",
                        },
                        withCredentials : true
                    }
                )

                const data = response.data;

                if(data.hasOwnProperty('isCreated')) alert(data.msg);

                if(data.hasOwnProperty('isValid') && !data.isValid) alert("You are not logged in");
            }
            catch(e){
                alert("Something went wrong");
            }
        }
        else{
            alert("Please fill in all fields: title, content, and image.")
        }
    }

  return (
    <div className='flex flex-col text-left'>
        <div ref={titleRef} className='text-white px-4 py-2 text-3xl font-medium rounded-lg bg-zinc-900 outline-none' contentEditable suppressContentEditableWarning>
            Title
        </div>
        <hr className="my-8 border-t border-zinc-800 h-0.5"/>
        <div ref={contentRef} className='text-white text-xl px-4 py-2 outline-none rounded-lg bg-zinc-900' contentEditable suppressContentEditableWarning>
            Content
        </div>
        <hr className="my-8 border-t border-zinc-800 h-0.5"/>
        <div className='flex justify-between'>
            <input type="file" accept='image/*' onChange={handleImageChange}/>
            <button onClick={publishBlog} className='px-6 py-2 bg-white text-black rounded-lg font-medium'>Publish</button>
        </div>
    </div>
  )
}
