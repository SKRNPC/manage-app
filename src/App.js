// App.js

import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentScreen from "./components/StudentScreen"; // Yeni eklediğimiz dosya
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className=" main-content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/student" element={<StudentScreen />} />
            <Route path="/student/app" element={<AddStudent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
