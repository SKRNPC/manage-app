// App.js

import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentScreen from "./components/StudentScreen"; // Yeni eklediğimiz dosya

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className=" main-content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/student" element={<StudentScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
