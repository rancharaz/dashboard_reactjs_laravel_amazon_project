import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { notifyError } from '../Toasts/Toast';


const LoginForm = () => {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();
    let auth = localStorage.getItem("user-info");

    /* if data user data true navigate to add product */
    useEffect(() => {
        if (auth) {
            navigate("/add-product")
        }
    }, [])
    /*  */

    /* login function */
    async function handleLogin() {
        try {
            let item = { email, password };/* data in object */
            let result = await fetch(`${process.env.REACT_APP_API_LOGIN_LINK}`, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                    'Access-Control-Allow-Methods': '*',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item), /* data string */
            })
            if (!result.ok) {
                throw new Error("Network response was not OK");
            }
            result = await result.json();
           /*  console.log(result) */
            localStorage.setItem("user-info", JSON.stringify(result));

            navigate("/add-product");

        }
        catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
            notifyError('Credentials are not correct.')   
        }
    }



    return (
        <div>
            <div>
                <div className="mt-8"></div>
                <h1>Login page</h1>
                <div className="mb-8"></div>
                <form className="w-full max-w-sm">

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
                            <button className="btn-send" type="button" onClick={handleLogin}>
                                Login
                            </button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm