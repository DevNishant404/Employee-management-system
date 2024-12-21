function CreateTask(){
    return(
        <div className="">
        <form className="flex mobile:flex-row flex-col flex-wrap items-start justify-between w-full bg-[#1c1c1c] mobile:p-5 mt-6 rounded-lg">
          <div className="mobile:w-1/2 w-full flex flex-col gap-5">
            <div>
              <h3>Task Title</h3>
              <input className="mobile:w-[80%] w-full h-10 border-2 border-white bg-transparent outline-none rounded placeholder:text-white pl-2" type="text" placeholder="Make a UI design" />
            </div>
            <div>
              <h3>Date</h3>
              <input  className="mobile:w-[80%] w-full h-10  border-2 border-white bg-transparent outline-none rounded placeholder:text-white px-2" type="date" />
            </div>
            <div>
              <h3>Asign to</h3>
              <input  className="mobile:w-[80%] w-full h-10  border-2 border-white bg-transparent outline-none rounded placeholder:text-white pl-2" type="text" placeholder="Employee name" />
            </div>
            <div>
              <h3>Category</h3>
              <input  className="mobile:w-[80%] w-full h-10  border-2 border-white bg-transparent outline-none rounded placeholder:text-white pl-2" type="text" placeholder="Design ,dev, etc" />
            </div>
          </div>

          <div className="mobile:w-1/2 w-full flex flex-col justify-center mobile:items-center gap-2">
            <h3>Description</h3>
            <textarea
              className="outline-none mobile:w-[65%] w-full h-[10rem] p-2 rounded bg-transparent border-2 border-white"
              name=""
              id=""

            ></textarea>
             <button className=" mobile:w-[65%] w-full bg-green-600 py-2 rounded">Create Task</button>
          </div>

         
        </form>
      </div>
    )
}

export default CreateTask;