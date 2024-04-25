import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { notifyError } from '../Toasts/Toast';
import secureLocalStorage from "react-secure-storage";
import { ROUTES } from '../Routes/RouterConfig';

const RegisterForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
 

    useEffect(() => {
        userInfoNav()
    }, [])

    function userInfoNav(){
        let user_info = secureLocalStorage.getItem("user-auth");
        if (user_info) {
            navigate(`${ROUTES.AddProduct}`)
        } else {
            navigate(`${ROUTES.Register}`)
        }
       
    }

    /* function to post data from form to database then navigate to addproductpage */
    async function signUp() {

        try {
            let item = { name, email, password }; 

            let result = await fetch(`${process.env.REACT_APP_API_REGISTER_LINK}`, {
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
            console.log(true)
            if (!result.ok) {
                throw new Error("Network response was not OK");
            }
            result = await result.json();
            console.log(result)
 
            secureLocalStorage.setItem("user-auth", JSON.stringify(result));
            navigate("/add-product")
        
        }
        catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
            notifyError('Credentials are not correct.')
        }
    }



    return (
        <div>
            <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Sign up Form</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input onChange={(e) => setName(e.target.value)} value={name} autocomplete="off" id="name" name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" />
                                        <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                                    </div>
                                    <div className="relative">
                                        <input onChange={(e) => setEmail(e.target.value)} value={email} autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                        <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                    </div>
                                    <div className="relative">
                                        <input onChange={(e) => setPassword(e.target.value)} value={password} autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                        <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    </div>
                                    <div className="relative">
                                        <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={signUp}>Submit</button>
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

export default RegisterForm
