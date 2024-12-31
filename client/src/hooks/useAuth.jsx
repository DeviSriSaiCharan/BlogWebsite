import axios from 'axios';
import React, { useState } from 'react'

export default function useAuth() {
    
    const [isLoggedIn, setIsLoggedIn] = useState();

    async function authCheck() {
        const response = await axios.get('http://localhost:3000/api/v0/auth/authCheck',{
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true,
        })

        setIsLoggedIn(response.data.isLoggedIn);
    }

    return isLoggedIn;

}
