
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

function AdminDashboard() {
  return (
    <div className="h-screen w-full mobile:p-10 p-3">
      <Header></Header>
        <CreateTask></CreateTask>
        <AllTask></AllTask>
    </div>
  );
}

export default AdminDashboard;
