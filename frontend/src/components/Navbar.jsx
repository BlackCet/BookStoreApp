import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
  import { Link } from 'react-router-dom';

export default function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const loginDialogRef = useRef(null);
  const signupDialogRef = useRef(null);


useEffect(() => {
  const element = document.documentElement;
  if (theme === "dark") {
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}, [theme]);


  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



const navItems = (
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/course">Course</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/about">About</Link></li>
  </>
);


  const openLogin = () => loginDialogRef.current?.showModal();
  const switchToSignup = () => {
    loginDialogRef.current?.close();
    signupDialogRef.current?.showModal();
  };
  const switchToLogin = () => {
    signupDialogRef.current?.close();
    loginDialogRef.current?.showModal();
  };

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-gray-200 dark:text-black fixed top-0 right-0 left-0 z-50 ${sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-gray-300 dark:text-black duration-300 transition-all ease-in-out" : ""}`}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content dark:bg-white dark:text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold">OpenShelf</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="hidden md:block">
          <label className="input border dark:bg-gray-400 dark:text-black rounded-md flex items-center gap-2 px-2">
            <input type="text" className="grow dark:placeholder-black" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
          </label>
        </div>

        <div className="navbar-end space-x-3">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              checked={theme === "dark"}
            />
            <svg className="swap-off h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
              <path d="..." />
            </svg>
            <svg className="swap-on h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
              <path d="..." />
            </svg>
          </label>

          {authUser ? (
            <Logout />
          ) : (
            <div>
              <button
                className=" text-white bg-orange-500 hover:bg-orange-700 dark:text-black px-8 py-2 rounded-md  duration-300 cursor-pointer"
                onClick={openLogin}
              >
                Login
              </button>

              {/* Login & Signup Modals */}
              <Login dialogRef={loginDialogRef} onSwitch={switchToSignup} />
              <Signup dialogRef={signupDialogRef} onSwitch={switchToLogin} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
