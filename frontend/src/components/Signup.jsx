import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useModal } from '../context/ModalContext';

function Signup({ dialogRef }) {
    const { openLogin } = useModal();

    const closeDialog = () => {
        if (dialogRef?.current) {
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
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/signup`, userInfo);
            console.log(res.data);
            if (res.data) {
                toast.success('Signup Successful!');
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                setTimeout(() => window.location.reload(), 1000);
            }
        } catch (err) {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            } else {
                console.error("Network error:", err);
                alert("Signup failed due to network error.");
            }
        }

        closeDialog();
    };

    return (
        <div>
            <dialog className="modal" ref={dialogRef}>
                <div className="modal-box dark:bg-gray-300 dark:text-black">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button
                            type="button"
                            onClick={closeDialog}
                            className="btn btn-sm absolute right-2 top-2"
                        >
                            X
                        </button>

                        <h3 className="font-bold text-lg">SIGN UP</h3>

                        <div className="mt-4 space-y-2">
                            <span>Full Name</span> <br />
                            <input
                                type="text"
                                placeholder="Enter your Full Name"
                                className="w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white"
                                {...register("fullname", { required: true })}
                            />
                            <br />
                            {errors.fullname && <span className="text-sm text-red-500">Full Name is required</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Email</span> <br />
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">Email is required</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Password</span> <br />
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="w-80 px-3 py-1 border rounded-lg outline-none dark:text-white dark:caret-white"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">Password is required</span>}
                        </div>

                        <div className="flex justify-around mt-4">
                            <button
                                type="submit"
                                className="bg-orange-500 px-3 py-1 hover:bg-orange-700 rounded-md text-white"
                            >
                                Signup
                            </button>
                            <span>
                                Already Registered?{" "}
                                <button
                                    type="button"
                                    onClick={() => {
                                        closeDialog();
                                        openLogin();
                                    }}
                                    className='text-orange-700 hover:text-orange-500'
                                >
                                    Login
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

Signup.propTypes = {
  dialogRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Signup;
