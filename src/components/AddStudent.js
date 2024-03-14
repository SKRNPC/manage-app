import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/features/usersSlice"; // Redux action'ınız (varsa)
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    age: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Kullanıcı bilgilerindeki değişiklikleri işleyen fonksiyon
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Yeni kullanıcıyı API'ye ekleyen ve başarıyla eklendiyse yerel state'e ekleyen fonksiyon
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(addUser(student));
      setStudent({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        age: "",
      });
      navigate("/student");
    } catch (error) {
      console.error("Kullanıcı eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div className="bg-orange-100 min-h-screen flex items-center justify-center p-10">
      <div className="p-5 rounded bg-red-200 my-8 max-w-lg w-full">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl mb-2">ADD NEW STUDENT</h1>
          <h3 className="font-bold text-xl">SAVE</h3>
          <p className="text-xs text-gray-700">Enter Student Information</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-bold">First Name</label>
            <input
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={student.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-bold text-sm">Last Name</label>
            <input
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={student.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-bold text-sm">Email</label>
            <input
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={student.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Password</label>
            <input
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={student.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-bold text-sm ">Phone</label>
            <input
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="number"
              name="phone"
              placeholder="Enter your phone"
              value={student.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-bold text-sm ">Age</label>
            <input
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="number"
              name="age"
              placeholder="Enter your age"
              value={student.age}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-red-400 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
