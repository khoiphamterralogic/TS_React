import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import MainLayout from "./Layouts/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
