import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
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
        <div>
            <dialog id="my_modal_3" className="modal" ref={dialogRef}>
                <div className="modal-box dark:bg-gray-300 dark:text-black">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close button */}
                        <button 
                            type="button" 
                            onClick={closeDialog} 
                            className="btn btn-sm absolute right-2 top-2">
                            X
                        </button>
                        
                        <h3 className="font-bold text-lg">LOGIN</h3>
                        
                        {/* EMAIL */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span> <br/>
                            <input 
                                type="email" 
                                placeholder='Enter your Email'
                                className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white' 
                                {...register("email", { required: true })} 
                            />
                            <br/> 
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        
                        {/* PASSWORD */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span> <br/>
                            <input 
                                type="password" 
                                placeholder='Enter your Password'
                                className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white' 
                                {...register("password", { required: true })} 
                            />
                            <br/> 
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        
                        {/* BUTTON */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className="bg-orange-500 px-3 py-1 hover:bg-orange-700 rounded-md text-white">
                                Login
                            </button>
                            <span>Not Registered? <Link to="/signup" className='text-orange-700 hover:text-orange-500'>Sign Up</Link></span>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;





// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";

// function Login() {
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
//     const onSubmit = data => console.log(data);

//     return (
//         <div>
//             <dialog id="my_modal_3" className="modal" ref={dialogRef}>
//                 <div className="modal-box dark:bg-gray-300 dark:text-black">
//                     <form onSubmit={handleSubmit(onSubmit)} method="dialog"> 
//                         {/* if there is a button in form, it will close the modal */}
//                         <button 
//                             type="button" 
//                             onClick={closeDialog} 
//                             className="btn btn-sm absolute right-2 top-2">
//                             X
//                         </button>
//                     </form>
//                     <h3 className="font-bold text-lg">LOGIN</h3>
//                     <div className='mt-4 space-y-2'>
//                         <span>Email</span> <br/>
//                         <input type="email" placeholder='Enter your Email'
//                         className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white' {...register("email", { required: true })} />
//                    <br/> {errors.email && <span  className='text-sm text-red-500'>This field is required</span>}
//                     </div>
//                     {/* PASSWORD */}
//                     <div className='mt-4 space-y-2'>
//                         <span>Password</span> <br/>
//                         <input type="password" placeholder='Enter your Password'
//                         className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white' {...register("password", { required: true })} />
//                        <br/> {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
//                     </div>
//                     {/* BUTTON */}
//                     <div className='flex justify-around mt-4'>
//                         <button className="bg-orange-500 px-3 py-1 hover:bg-orange-700 rounded-md text-white">Login</button>
//                         <span>Not Registered? <Link to="/signup" className='text-orange-700 hover:text-orange-500'>Sign Up</Link></span>
//                     </div>
//                 </div>
//             </dialog>
//         </div>
//     );
// }

// export default Login;



// import React from 'react';
// import { Link } from 'react-router-dom';

// function Login() {
//     return (
//         <div>
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box dark:bg-gray-300 dark:text:black">
//                     <form method="dialog"> 
//                         {/* if there is a button in form, it will close the modal */}
//                     <Link to="/" className="btn btn-sm  absolute right-2 top-2">X</Link>
//                     </form>
//                     <h3 className="font-bold text-lg">LOGIN</h3>
//                     <div className='mt-4 space-y-2'>
//                         <span>Email</span> <br/>
//                         <input type="text" placeholder='Enter your Email'
//                         className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white' />
//                     </div>
//                     {/* PASSWORD */}
//                     <div className='mt-4 space-y-2'>
//                         <span>Password</span> <br/>
//                         <input type="text" placeholder='Enter your Password'
//                         className='w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white' />
//                     </div>
//                     {/* BUTTON */}
//                     <div className='flex justify-around mt-4'>
//                     <button className="bg-orange-500 px-3 py-1 hover:bg-orange-700 rounded-md text-white">Login</button>
//                     <span>Not Registered? <Link to="/signup" className='text-orange-700 hover:text-orange-500'>Sign Up</Link></span>
//                     </div>
//                 </div>
//             </dialog>
//         </div>
//     )
// }

// export default Login;