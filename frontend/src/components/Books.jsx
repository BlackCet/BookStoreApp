import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";
import { Bars } from 'react-loader-spinner';

function Books() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/book`);
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "free"));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 dark:bg-gray-200 dark:text-black">
        <Bars
          height="80"
          width="80"
          color="#4B5563"
          ariaLabel="loading-books"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-gray-200 dark:text-black'>
      <h1 className='font-semibold text-xl pb-2'>Access Without Login</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Here access the free books.</p>

      <Slider {...settings}>
        {book.map((item) => (
          <Cards item={item} key={item._id} />
        ))}
      </Slider>
    </div>
  );
}

export default Books;
