import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserWorkout from "./Components/UserWorkoutPage/UserWorkout";
import UserDiet from "./Components/UserDietPage/UserDiet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/workout/:id" element={<UserWorkout />} />
        <Route path="/diet/:id" element={<UserDiet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
