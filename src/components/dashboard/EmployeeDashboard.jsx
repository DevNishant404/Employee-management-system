import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../tasklist/TaskList";

function EmployeeDashboard({data}){
    console.log(data)
return(
    <div className="p-3 mobile:p-10 bg-[#1c1c1c] h-screen w-screen">
        
        <Header data={data}></Header>
        <TaskListNumbers data={data}></TaskListNumbers>
        <TaskList data={data}></TaskList>
    </div>   
)
}

export default EmployeeDashboard;