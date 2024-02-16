import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className=" main-content">
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
