import { Route, Routes } from "react-router-dom"; 
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Toaster } from 'react-hot-toast';
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { useModal } from "./context/ModalContext";
function App() {
   const { loginRef, signupRef } = useModal();
  return (
      <div className="dark:bg-gray-200 dark:text-black min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
        </Routes>
         <Login dialogRef={loginRef} />
      <Signup dialogRef={signupRef} />
        <Toaster />
      </div>
  );
}

export default App;
