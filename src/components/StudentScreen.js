import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/features/usersSlice";
import { Link } from "react-router-dom";
import { ReactComponent as PenSvg } from "../svgImage/pen.svg";
import { ReactComponent as TrashSvg } from "../svgImage/trash.svg";

function StudentScreen() {
  const dispatch = useDispatch();
  const { data: users } = useSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(6);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Geçerli sayfadaki kullanıcıları hesapla
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Sayfa değiştirme fonksiyonu
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sayfa başına kullanıcı sayısını değiştirme fonksiyonu
  const handleUsersPerPageChange = (e) => {
    setUsersPerPage(Number(e.target.value));
    setCurrentPage(1); // Kullanıcı sayısı değiştiğinde 1. sayfaya dön
  };

  // Sayfa numaralarını hesapla
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-10 min-h-screen bg-orange-100">
      <div className="flex items-center justify-between py-5 w-full border-b border-[#ec8f8f]">
        <p className="text-2xl font-bold">Students List</p>
        <div className="ml-auto flex">
          <SearchBar />
          <Link to="/student/app" className="menu-link">
            <button className="bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded ml-4">
              Add New Student
            </button>
          </Link>
        </div>
      </div>
      <div className="flex p-5">
        <p className=" w-[18%] ml-36 text-sm font-semibold text-red-400 ">
          Name
        </p>
        <p className=" w-[22%] text-sm font-semibold text-red-400 ">Email</p>
        <p className=" w-[18%] text-sm font-semibold text-red-400 ">Phone</p>
        <p className=" w-[18%] text-sm font-semibold text-red-400 ">Website</p>
        <p className=" w-[29%] text-sm font-semibold text-red-400 ">
          Company Name
        </p>
      </div>
      <div>
        {currentUsers?.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-base bg-red-200 p-2 rounded-lg mt-2"
          >
            <div className="w-20 h-16 rounded-lg object-contain overflow-hidden">
              <img
                alt=""
                src={user.image}
                className="w-full h-full object-fill css-0"
              ></img>
            </div>
            <p className="w-[18%] ml-9">
              {user.firstName} {user.lastName}
            </p>
            <p className="w-[22%]">{user.email}</p>
            <p className="w-[18%]">{user.phone}</p>
            <p className="w-[18%]">{user.domain}</p>
            <p className="w-[25%]">{user.company.name}</p>
            <PenSvg className="w-6 h-6 mr-2 " />
            <TrashSvg className="w-6 h-6 ml-2 " />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div>
          <select
            value={usersPerPage}
            onChange={handleUsersPerPageChange}
            className="bg-red-300 border border-red-300 text-white rounded focus:ring-red-500 focus:border-red-400 p-2 w-auto font-bold"
          >
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
        </div>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className="bg-orange-300 hover:bg-orange-500 text-white font-bold py-1 px-4 rounded ml-1"
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StudentScreen;
