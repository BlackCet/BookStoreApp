import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from=location.state?.from?.pathname || "/";
    const dialogRef = useRef(null);

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async data => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };
        try {
            const res = await axios.post("http://localhost:4001/user/signup", userInfo);
            console.log(res.data);
            if (res.data) {
                toast.success('Signup Successful!');
                navigate(from,{replace:true});

            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));
        } catch (err) {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            } else {
                console.error("Network error:", err);
                alert("Signup failed due to network error.");
            }
        };
        closeDialog(); // Close the dialog after form submission
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="w-[700px]">
                <div className="modal-box dark:bg-gray-300 dark:text-black">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close button */}
                        <button onClick={closeDialog} aria-label="Close" className="btn btn-sm absolute right-2 top-2">X</button>
                        <h3 className="font-bold text-lg">SIGN UP</h3>

                        {/* FULL NAME */}
                        <div className='mt-4 space-y-2'>
                            <span>Full Name</span> <br />
                            <input
                                type="text"
                                placeholder='Enter your Full Name'
                                className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white'
                                {...register("fullname", { required: true })}
                            />
                            <br />
                            {errors.fullname && <span className='text-sm text-red-500'>Full Name is required</span>}
                        </div>

                        {/* EMAIL */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span> <br />
                            <input
                                type="email"
                                placeholder='Enter your Email'
                                className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
                        </div>

                        {/* PASSWORD */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span> <br />
                            <input
                                type="password"
                                placeholder='Enter your Password'
                                className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white'
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
                        </div>

                        {/* BUTTON */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className="bg-orange-500 px-3 py-1 hover:bg-orange-700 rounded-md text-white">
                                Signup
                            </button>
                            <span>
                                Registered?{" "}
                                <button
                                    className='text-orange-700 hover:text-orange-500'
                                    type="button"
                                    onClick={() => dialogRef.current.showModal()}
                                >
                                    Login
                                </button>{" "}
                                <Login />
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
