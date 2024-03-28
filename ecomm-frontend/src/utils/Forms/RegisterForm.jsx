import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    /* if data user data true navigate to add product */
    useEffect(() => {
        if(localStorage.getItem("user-info")){
            navigate("/add-product")
        }
    })

    /* function to post data from form to database then navigate to addproductpage */
       async function signUp(){
                let item = {name, password, email};

                let result = await fetch(`${process.env.REACT_APP_API_REGISTER_LINK}`,
                    {
                        method: "POST",
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                            'Access-Control-Allow-Methods': '*',
                            "Content-Type": "application/json"
                        },
                        body:JSON.stringify(item)
                    });
                    result = await result.json();
                    localStorage.setItem("user-info", JSON.stringify(result));

                    navigate("/add-product")
        }

 
    return (
        <div>
            <div className="mt-8"></div>
            <h1>Register</h1>
            <div className="mb-8"></div>
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-full-name" >
                            Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-full-name" type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-full-email" >
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-full-email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block label-text" htmlFor="inline-password">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="input-text" id="inline-password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">


                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="btn-send" type="button" onClick={signUp}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm