import { Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
