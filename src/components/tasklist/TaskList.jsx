import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

function TaskList({data}){
    console.log(data)
return(
    <div id="tasklist" className="overflow-x-auto h-[55%] w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap">
        {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem}></AcceptTask>
            }
            if(elem.NewTask){
                return <NewTask key={idx}  data={elem}></NewTask>
            }
            if(elem.completed){
                return <CompletedTask key={idx}  data={elem}></CompletedTask>
            }
            if(elem.failed){
                return <FailedTask key={idx}  data={elem}></FailedTask>
            }
        })}


    </div>
)
}

export default TaskList;