
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

function AdminDashboard(props) {
  return (
    <div className="h-screen w-full mobile:p-10 p-3">
      <Header changeUser={props.changeUser}></Header>
        <CreateTask></CreateTask>
        <AllTask></AllTask>
    </div>
  );
}

export default AdminDashboard;
