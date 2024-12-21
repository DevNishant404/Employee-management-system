import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const authdata=useContext(AuthContext)
  return (
    <div className="bg-[#1c1c1c] mobile:p-5 mt-5 rounded gap-3 font-semibold">
                <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-1">
          <h2 className="w-1/5 text-[12px] mobile:text-[16px]">Employee Name</h2>
          <h3 className="w-1/5 text-[12px] mobile:text-[16px]">New Task</h3>
          <h5 className="w-1/5 text-[12px] mobile:text-[16px]">Active Task</h5>
          <h5 className="w-1/5 text-[12px] mobile:text-[16px]">Completed</h5>
          <h5 className="w-1/5 text-[12px] mobile:text-[16px]">Failed</h5>
        </div>
        <div className="h-[80%] overflow-auto">
        {authdata.employees.map(function(elem){
        return(
          <div className=" py-2 border-2 border-emerald-500 mb-1 bg-black px-4 flex justify-between rounded">
          <h2 className="w-1/5  text-[12px] mobile:text-[16px] font-medium">{elem.firstname}</h2>
          <h3 className="w-1/5 text-blue-600  font-medium">{elem.taskNumbers.newTask}</h3>
          <h5 className="w-1/5 text-yellow-500 font-medium">{elem.taskNumbers.active}</h5>
          <h5 className="w-1/5 text-green-600  font-medium">{elem.taskNumbers.completed}</h5>
          <h5 className="w-1/5 text-red-400 font-medium">{elem.taskNumbers.failed}</h5>
        </div>
        )
      })}
        </div>
    </div>
  );
}

export default AllTask;
