import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Side from "./components/Sidebar";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Verify from "./pages/Verify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/sidebar" element={<Side />} />
          <Route path="/main" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
