import { ToastContainer } from "react-toastify";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentScreen from "./components/StudentScreen";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";
import SignInScreen from "./components/SignIn";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Bu örnekte, isAuthenticated değişkeni kullanıcı girişi durumunu temsil ediyor.
  // Gerçek bir uygulamada bu değer, örneğin kullanıcı giriş yaptığında ayarlanan bir state veya bir kimlik doğrulama kütüphanesi tarafından sağlanabilir.
  const isAuthenticated = false; // Giriş yapılmış gibi varsayıyoruz. Gerçek durumda bu dinamik olmalı.

  return (
    <Router>
      <ToastContainer />

      {!isAuthenticated && <SignInScreen />}

      {isAuthenticated && (
        <div className="App">
          {" "}
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/student" element={<StudentScreen />} />
              <Route path="/student/add" element={<AddStudent />} />
              <Route path="/student/:id" element={<UpdateStudent />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
