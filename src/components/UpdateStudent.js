import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser, fetchUserById } from "../redux/features/usersSlice"; // Kullanıcıyı ID'ye göre seçmek için bir seçici ve bir updateUser thunk varsayalım

function UpdateStudent() {
  const { id } = useParams(); // URL'den kullanıcı ID'sini al
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);
  // Seçili kullanıcıyı store'dan al

  useEffect(() => {
    dispatch(fetchUserById(id)); // Component yüklendiğinde, seçili kullanıcının bilgilerini getir
  }, [dispatch, id]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    // Seçili kullanıcı bilgileri değiştiğinde, form verilerini güncelle
    if (selectedUser) {
      setFormData({
        firstName: selectedUser.firstName,
        lastName: selectedUser.lastName,
        email: selectedUser.email,
        phone: selectedUser.phone,
        website: selectedUser.domain,
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser({ id, ...formData }))
      .then(() => {
        navigate("/student");
      })
      .catch((error) => {
        console.error("Güncelleme sırasında bir hata oluştu", error);
      });
  };
  return (
    <>
      <div className="main-content">
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
                  value={formData.firstName}
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
                  value={formData.lastName}
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
                  value={formData.email}
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
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-bold text-sm ">Phone</label>
                <input
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  type="text"
                  name="phone"
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-bold text-sm ">Website</label>
                <input
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  type="text"
                  name="website"
                  placeholder="Enter your Website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-red-400 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Update Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateStudent;
