import React from 'react';
import list from '../../public/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Course() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-gray-200 dark:text-black'>
                <div className='pt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        Lorem ipsum dolor sit amet <span className='text-orange-500'>consectetur</span></h1>
                    <p mt-12>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolorem nostrum culpa at explicabo quasi suscipit odit rerum praesentium, rem harum reprehenderit nobis illo pariatur libero itaque totam veniam consectetur.</p>
                    <Link to="/">
                        <button className='bh-pink-500 text-white dark:text-black px-4 py-2 rounded-md hover:bg-orange-700 duration-200'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Course;
