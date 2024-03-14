import { ToastContainer } from "react-toastify";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentScreen from "./components/StudentScreen"; // Yeni eklediğimiz dosya
import AddStudent from "./components/AddStudent";
import "react-toastify/dist/ReactToastify.css";
import UpdateStudent from "./components/UpdateStudent";
import SignInScreen from "./components/SignIn";

function App() {
  return (
    <Router>
      <ToastContainer />
      <SignInScreen />
      <div className="App">
        {/* <Sidebar /> */}
        <div className=" main-content">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/student" element={<StudentScreen />} />
            <Route path="/student/add" element={<AddStudent />} />
            <Route path="/student/:id" element={<UpdateStudent />} />{" "}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
