import "./global.style.css";
import Dasboard from "./components/Dasboard";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dasboard" element={<Dasboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
