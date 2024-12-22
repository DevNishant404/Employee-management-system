import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { use } from "react";

function App() {
  useEffect(() => {
    setLocalStorage();
  }, []);

  const [user, setUser] = useState(null);
  const [loggedInuserData,setloggedInuserData]=useState(null)
  const[userData,setUserData]=useContext(AuthContext)

  useEffect(()=>{
    if(userData){
      const loggedInUser=localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData=JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInuserData(userData.data)
      }
    }
  },[])

  console.log("AuthContext data:", userData); 
  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInuser",JSON.stringify({role:'admin'}))
    } else if (userData) {
      const employee=userData.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser("employee");
        setloggedInuserData(employee)
        localStorage.setItem("loggedInuser",JSON.stringify({role:'employee',data:employee}))
      }
    } else {
      alert("Invalid Credentials");
    }
  };


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (<AdminDashboard  changeUser={setUser}/>) : user === "employee" ? (<EmployeeDashboard   changeUser={setUser} data={loggedInuserData} />
) : null}

    </>
  );
}

export default App;
