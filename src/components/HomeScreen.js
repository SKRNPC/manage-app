function HomeScreen() {
  return (
    <>
      <div className="p-10 flex ">
        <div className="p-5 w-64 h-32 bg-orange-500 bg-opacity-50 text-white relative mr-6">
          <p className="text-lg">Students</p>
          <p className="absolute bottom-0 right-0 p-4 mr-4 text-black font-bold text-xl">
            243
          </p>
        </div>
        <div className="p-5 w-64 h-32 bg-orange-500 bg-opacity-50 text-white relative mr-6">
          <p className="text-lg">Course</p>
          <p className="absolute bottom-0 right-0 p-4 mr-4 text-black font-bold text-xl">
            13
          </p>
        </div>
        <div className="p-5 w-64 h-32 bg-orange-500 bg-opacity-50 text-white relative mr-6">
          <p className="text-lg">Payments</p>
          <p className="absolute bottom-0 right-0 p-4 mr-4 text-black font-bold text-xl">
            500,000₺
          </p>
        </div>
        <div className="p-5 w-64 h-32 bg-orange-500 bg-opacity-50 text-white relative mr-6">
          <p className="text-lg">Users</p>
          <p className="absolute bottom-0 right-0 p-4 mr-4 text-black font-bold text-xl">
            3
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
