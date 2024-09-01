import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Added missing Navigate import
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth(); // Accessing authUser from context

  return (
    <div className="dark:bg-gray-200 dark:text-black min-h-screen"> {/* Ensure the whole screen is covered */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
