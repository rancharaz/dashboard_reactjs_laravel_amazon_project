import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { notifyError } from '../Toasts/Toast';
import axios from 'axios';
import  secureLocalStorage  from  "react-secure-storage";

const LoginForm = () => {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user-info'));

    /* if data user data true navigate to add product */
    useEffect(() => {
        if (user) {
            navigate("/add-product")
        }
    }, [])
    /*  */
    console.log("user",user)

    const http = axios.create({
        baseURL: "http://localhost:8000",
        headers: {
            'X-Requested-With': "XMLHttpRequest",
        },
        withCredentials: true,
    });

 
 
    async function getUser(){
        const csrf = await http.get('/sanctum/csrf-cookie');
        console.log('csrf = ', csrf);

        const login = await http.post('/api/login', {
            email,
            password,
            

        })
        console.log('login', login.data.id);

        const user = await http.get('/api/get-user');
        console.log('user = ', user)
        secureLocalStorage.setItem("user-info", JSON.stringify(login));
        console.log(secureLocalStorage.getItem("user-info"));
       if(!login){
        
        console.log("USER NOT EXIST")
        navigate("/add-product");

       } else {
        console.log("USER EXIST")
        navigate("/add-product");

       }
    }



    /* login function */
/*     async function handleLogin() {
        try {
            let item = { email, password };
            let result = await fetch(`${process.env.REACT_APP_API_LOGIN_LINK}`, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                    'Access-Control-Allow-Methods': '*',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item),  
            })
            if (!result.ok) {
                throw new Error("Network response was not OK");
            }
            result = await result.json();
 
            localStorage.setItem("user-info", JSON.stringify(result));
            console.log("login",result)
            navigate("/add-product");

        }
        catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
            notifyError('Credentials are not correct.')   
        }
    }
 */


    return (
        <div>
           <div class="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login Form</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input onChange={(e) => setEmail(e.target.value)} value={email} autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input onChange={(e) => setPassword(e.target.value)} value={password} autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1" onClick={getUser}>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    )
}

export default LoginForm