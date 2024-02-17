import resim1 from "../images/580b57fcd9996e24bc43c325.png";
function AdminPanel() {
  return (
    <>
      <div className="admin-panel flex flex-col items-center justify-center">
        <p className="text-2xl font-bold">MANAGE COURSES</p>
        <img
          src={resim1}
          alt="Resim Açıklaması"
          className="h-32 w-32 mt-8 rounded-image"
        />
        <p className="mt-5 text-lg font-bold">Mustafa Sinan Kırnapcı</p>
        <p className="text-sm text-red-600">Admin</p>
      </div>
    </>
  );
}

export default AdminPanel;
