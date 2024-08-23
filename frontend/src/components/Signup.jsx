import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
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

    const onSubmit = data => {
        console.log(data);
        closeDialog(); // Close the dialog after form submission
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="w-[700px]">
                <div className="modal-box dark:bg-gray-300 dark:text-black">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close button */}
                        <Link to="/" className="btn btn-sm absolute right-2 top-2">X</Link>
                        <h3 className="font-bold text-lg">SIGN UP</h3>
                        
                        {/* NAME */}
                        <div className='mt-4 space-y-2'>
                            <span>NAME</span> <br />
                            <input 
                                type="text" 
                                placeholder='Enter your Name'
                                className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white'  
                                {...register("name", { required: true })} 
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
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
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
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
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
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
                                    onClick={() => document.getElementById("my_modal_3").showModal()}
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


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Login from './Login';
// import { useForm } from "react-hook-form";


// function Signup() {
//     const dialogRef = useRef(null);

//     const closeDialog = () => {
//         if (dialogRef.current) {
//             dialogRef.current.close();
//         }
//     };

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = data => {
//         console.log(data);
//         closeDialog(); // Close the dialog after form submission
//     };
//     return (
//         <> <div className='flex h-screen items-center justify-center'>
//             <div className="w-[700px]">
//                 <div className="modal-box dark:bg-gray-300 dark:text:black">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         {/* if there is a button in form, it will close the modal */}
//                         <Link to="/" className="btn btn-sm  absolute right-2 top-2">X</Link>
//                         <h3 className="font-bold text-lg">SIGN UP</h3>
//                         {/* NAME */}
//                         <div className='mt-4 space-y-2'>
//                             <span>NAME</span> <br />
//                             <input type="text" placeholder='Enter your Name'
//                                 className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white'  {...register("name", { required: true })} />
//                             <br />
//                             {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
//                         </div>
//                         {/* EMAIL */}
//                         <div className='mt-4 space-y-2'>
//                             <span>Email</span> <br />
//                             <input type="text" placeholder='Enter your Email'
//                                 className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white'  {...register("email", { required: true })} />
//                             <br />
//                             {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
//                         </div>

//                         {/* PASSWORD */}
//                         <div className='mt-4 space-y-2'>
//                             <span>Password</span> <br />
//                             <input type="text" placeholder='Enter your Password'
//                                 className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white'  {...register("password", { required: true })} />
//                             <br />
//                             {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
//                         </div>
//                         {/* BUTTON */}
//                         <div className='flex justify-around mt-4'>
//                             <button className="bg-orange-500 px-3 py-1 hover:bg-orange-700 rounded-md text-white">Signup</button>
//                             <span>Registered? {" "} <button className='text-orange-700 hover:text-orange-500' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>{" "} <Login /></span>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div >

//         </>
//     )
// }

// export default Signup;
