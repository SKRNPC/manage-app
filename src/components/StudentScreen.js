import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/features/usersSlice";

function StudentScreen() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log("users", users.data);

  return (
    <div className="p-10 h-screen bg-orange-100">
      <div className="flex items-center justify-between py-5 w-full border-b border-[#ec8f8f]">
        <p className="text-2xl font-bold ">Students List</p>
        <div className="ml-auto flex">
          <SearchBar />
          <button className="bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded ml-4">
            Add New Student
          </button>
        </div>
      </div>
      <div className="flex p-5">
        <p className=" text-sm ml-28 font-semibold text-red-400 ">Name</p>
        <p className=" ml-36 text-sm font-semibold text-red-400 ">Email</p>
        <p className=" ml-44 text-sm font-semibold text-red-400 ">Phone</p>
        <p className=" ml-36 text-sm font-semibold text-red-400 ">Website</p>
        <p className=" ml-36 text-sm font-semibold text-red-400 ">
          Company Name
        </p>
      </div>
      <div>
        {users.data.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-base bg-red-200 p-2 rounded-lg mt-2"
          >
            <p className="ml-4">
              {user.firstName} {user.lastName}
            </p>
            <p className="ml-20">{user.email}</p>
            <p className="ml-20">{user.phone}</p>
            <p className="ml-20">{user.domain}</p>{" "}
            {/* Assuming 'domain' exists in your user data */}
            <p className="ml-20">{user.companyName}</p>{" "}
            {/* Adjust these fields based on the actual user object structure */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentScreen;
