function Menu() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-24">
        <button className=" bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32">
          Home
        </button>
        <button className=" bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32">
          Course
        </button>
        <button className=" bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32">
          Student
        </button>
        <button className=" bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32">
          Payment
        </button>
        <button className=" bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32">
          Report
        </button>
        <button className=" bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32">
          Settings
        </button>
      </div>
    </>
  );
}

export default Menu;
