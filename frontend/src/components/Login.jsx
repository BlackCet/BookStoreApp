import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useModal } from '../context/ModalContext';

function Login({ dialogRef }) {
  const { openSignup } = useModal();

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
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success('Login Successful!');
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

            <h3 className="font-bold text-lg">LOGIN</h3>

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

            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className="bg-orange-500 px-3 py-1 hover:bg-orange-700 rounded-md text-white"
              >
                Login
              </button>
              <span>
                Not Registered?{" "}
                <button
                  type="button"
                  onClick={() => {
                    closeDialog();
                    openSignup();
                  }}
                  className='text-orange-700 hover:text-orange-500'
                >
                  Sign Up
                </button>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

Login.propTypes = {
  dialogRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Login;
