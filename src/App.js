// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Sidebar from "./Pages/Sidebar";
import Dashboard from "./Components/Dashboard";
import Customers from "./Components/Customers";
import Logs from "./Components/Logs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
         <Route path="/app" element={<Sidebar />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} /> {/* fixed typo from "customes" */}
        <Route path="logs" element={<Logs />} />
      </Route>
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
