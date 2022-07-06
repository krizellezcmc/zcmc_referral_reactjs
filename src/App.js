import "./App.css";

import Login from "./pages/Login";
import Side from "./components/Sidebar/";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sidebar" element={<Side />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
