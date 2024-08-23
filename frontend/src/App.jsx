import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (<>
    <div className=" dark:bg-gray-200 dark:text-black">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  </>
  );
}

export default App;