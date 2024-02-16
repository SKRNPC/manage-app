import AdminPanel from "./AdminPanel";
import Menu from "./Menu";

function Sidebar() {
  return (
    <>
      <div className="bg-red-200 sidebar-css flex flex-col justify-center items-center h-screen">
        <AdminPanel />
        <Menu />
      </div>
    </>
  );
}

export default Sidebar;
