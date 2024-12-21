import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { use } from "react";

function App() {

  const [user, setUser] = useState(null);
  const [loggedInuserData,setloggedInuserData]=useState(null)
  const authData = useContext(AuthContext);

  useEffect(()=>{
    if(authData){
      const loggedInUser=localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData=JSON.parse(loggedInUser)
        setUser(UserData.role)
        setloggedInuserData(userData.data)
      }
    }
  },[])

  console.log("AuthContext data:", authData); 
  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInuser",JSON.stringify({role:'admin'}))
    } else if (authData) {
      const employee=authData.employees.find((e)=>email==e.email && e.password==password)
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
      {user === "admin" ? (<AdminDashboard />) : user === "employee" ? (<EmployeeDashboard data={loggedInuserData} />
) : null}

    </>
  );
}

export default App;
