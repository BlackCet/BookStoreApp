import React from 'react';
import banner from "../../public/Banner.jpg";

function Banner() {
    return <>
        <div className="max-w-screen-2xl container mx-auto md:px-4 px-2 flex flex-col md:flex-row my-10  dark:bg-gray-200 dark:text-black">
            <div className='order-2 md:order-1 w-full mt-12 md:w-1/2 md:mt-32 '>
                <div className='space-y-12'>
                    <h1 className='text-4xl font-bold'>Yoho! Welcome to the great library of wizarding world for some <span className='text-orange-500'>reading?</span></h1>
                    <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem, iusto excepturi eveniet dolor officiis quo at ab pariatur praesentium maiores ipsum consectetur dolorem earum, similique dolores nostrum suscipit magni.</p>
                    <label className="input input-bordered flex items-center gap-2 dark:bg-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow dark:placeholder-black" placeholder="Email" />
                    </label>
                </div>
                <button className="btn bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-500 btn-secondary mt-3">Get Started</button>
            </div>

            <div className=" order-1 w-full md:w-1/2 flex justify-center items-center p-4 mt-12">
                <img
                    src={banner}
                    alt=""
                    className="w-auto h-auto max-w-full max-h-full object-cover"
                    style={{ borderRadius: '10px', margin: '10px' }}
                />
            </div>
        </div>

    </>
}

export default Banner;
