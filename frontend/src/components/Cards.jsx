import React from 'react';

function Cards({ item }) {
    console.log(item);
    return (
        <>
            <div className='mt-4 my-3'>
                <div className="card bg-base-100  dark:bg-gray-200 dark:text-black w-92 p-3 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary bg-orange-500 border-orange-500">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-end">
                            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-orange-500 hover:text-white duration-200">READ</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className='mt-4 my-3'>
                <div className="card bg-base-100 w-72 h-96 p-3 shadow-xl flex flex-col justify-between">
                    <figure className="flex-grow">
                        <img
                            src={item.image}
                            alt="Shoes" className="object-cover w-full h-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p className="flex-grow">{item.title}</p>
                        <div className="card-actions justify-end">
                            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-orange-500 hover:text-white duration-200">READ</div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default Cards;
