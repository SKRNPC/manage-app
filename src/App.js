import { ToastContainer } from "react-toastify";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Sidebar from "./components/Sidebar";
import SignInScreen from "./components/SignIn";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import StudentScreen from "./components/StudentScreen";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <ToastContainer />
      {isAuthenticated && <Sidebar />}
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="*" element={<Navigate replace to="/signin" />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/student" element={<StudentScreen />} />
            <Route path="/student/add" element={<AddStudent />} />
            <Route path="/student/:id" element={<UpdateStudent />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
