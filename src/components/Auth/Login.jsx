import { useState } from "react";

function Login({handleLogin}){

    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')


    function onsubmitHandler(e){
        e.preventDefault()
        handleLogin(email,password)
        setemail("")
        setpassword("")
    }
    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="border-4 border-emerald-600 py-32 px-3 moblie:px-10">
                <form 
                onSubmit={onsubmitHandler}
                className="flex flex-col items-center justify-center gap-6">
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                    required
                    className="bg-transparent placeholder:text-2xl placeholder:text-gray-400 px-2 w-[22rem] mobile:w-[30rem] py-3 border-4 border-emerald-600 outline-none text-2xl rounded-full" type="email" placeholder="Enter Your E-mail" />
                    <input 
                    value={password}
                    onChange={(e)=>{
                    setpassword(e.target.value)
                 }}
                    required
                    className="bg-transparent placeholder:text-2xl placeholder:text-gray-400 px-2 w-[22rem] mobile:w-[30rem] py-3 border-4 border-emerald-600 outline-none text-2xl rounded-full" type="password" placeholder="Enter password" />
                    <button className="bg-emerald-600 placeholder:text-2xl  px-2 w-[22rem]  mobile:w-[30rem] py-3  text-white outline-none text-2xl mt-5 rounded-full">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;