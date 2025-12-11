import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/counter";
import Parent from "./pages/Parent";
import Child from "./pages/Child";
import Pagination from "./pages/Pagination";
import Portal from "./pages/Portal";
import Count from "./pages/count";
import Table from "./pages/Table";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/child" element={<Child />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/count" element={<Count />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
