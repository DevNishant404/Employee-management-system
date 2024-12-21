import { useState } from "react"
import { setLocalStorage } from "../../utils/LocalStorage"

function Header(){
    // const [username,setUsername]=useState('')
    // if(!data){
    //     setUsername('Admin')
    // }else{
    //     setUsername(data.firstname)
    // }
    const logOutUser=()=>{
        localStorage.setItem('loggedInuser','')
        window.location.reload()
    }
    return(
        <div className=" flex items-end justify-between">
            <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl">username👋</span></h1>
            <button onClick={logOutUser} className="text-lg font-medium bg-red-500 text-white px-3 py-2 rounded-sm">Log out</button>
        </div>
    )
}

export default Header