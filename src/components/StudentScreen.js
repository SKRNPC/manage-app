import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/features/usersSlice";

function StudentScreen() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log("users", users);

  return (
    <div className="p-10 h-screen bg-orange-100">
      <div className="flex items-center justify-between py-5 w-full border-b border-[#ec8f8f]">
        <p className="text-2xl font-bold h-8">Student List</p>
        <div className="ml-auto flex">
          <SearchBar />
          <button className="bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded h-8 ml-4">
            Add New Student
          </button>
        </div>
      </div>
      <div className="flex p-5">
        <p className=" text-sm ml-24 font-semibold text-red-400 ">Name</p>
        <p className=" ml-36 text-sm font-semibold text-red-400 ">Email</p>
        <p className=" ml-44 text-sm font-semibold text-red-400 ">Phone</p>
        <p className=" ml-36 text-sm font-semibold text-red-400 ">Website</p>
        <p className=" ml-36 text-sm font-semibold text-red-400 ">
          Company Name
        </p>
      </div>
    </div>
  );
}

export default StudentScreen;
