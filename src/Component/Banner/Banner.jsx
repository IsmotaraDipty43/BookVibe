import React from 'react';
import banner from '../../assets/books.jpg';
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg p-10 justify-center items-center mt-10 mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner} 
            className="rounded-lg shadow-2xl" />
          <div>
            <h1 className=" text-3xl md:text-5xl mb-5 font-bold">Books to freshen up your bookshelf</h1>
           
            <button className="btn bg-green-500 text-white">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;