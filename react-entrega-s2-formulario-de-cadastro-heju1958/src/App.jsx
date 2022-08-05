import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dasboard from "./components/Dasboard";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/dasboard" element={<Dasboard user={user} />} />
        <Route
          path="/"
          element={
            <Login
              loading={loading}
              setLoading={setLoading}
              setUser={setUser}
            />
          }
        />
        <Route path="/register" element={<Register />} user={user} />
      </Routes>
    </div>
  );
}

export default App;
