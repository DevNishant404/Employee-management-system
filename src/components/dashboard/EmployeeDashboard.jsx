import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../tasklist/TaskList";

function EmployeeDashboard(props){
 
return(
    <div className="p-3 mobile:p-10 bg-[#1c1c1c] h-screen w-screen">
        
        <Header changeUser={props.changeUser} data={props.data}></Header>
        <TaskListNumbers data={props.data}></TaskListNumbers>
        <TaskList data={props.data}></TaskList>
    </div>   
)
}

export default EmployeeDashboard;