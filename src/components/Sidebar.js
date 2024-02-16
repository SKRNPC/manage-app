import AdminPanel from "./AdminPanel";
import Menu from "./Menu";

function Sidebar() {
  return (
    <>
      <div className="bg-red-200 sidebar-css items-center h-screen">
        <AdminPanel />
        <Menu />
      </div>
    </>
  );
}

export default Sidebar;
