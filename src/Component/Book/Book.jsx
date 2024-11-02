import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const{bookId,image,bookName,author,tags , category,rating} =book;
    return (
    <Link to={`/books/${bookId}`}>
    
    <div>
             <div className="card bg-base-100 w-96 shadow-xl p-6">
  <figure className='bg-gray-100 py-8 rounded-lg'>
    <img
      src={image}
      alt={bookName} className='h-[160px]' />
  </figure>
  <div className="card-body">
<div className='flex gap-5 justify-center items-center'>
{
    tags.map((tag,idx)=> <button key ={idx}className="btn btn-xs text-lg  rounded-full bg-gray-50 text-green-500 font-semibold">{tag}</button> )
}
</div>
    <h2 className="card-title">
       {bookName}
    </h2>
    <h1 className='text-xl font-bold text-black'>The Catcher in the Rye</h1>
    <p className='text-base font-semibold text-black'>By : {author}</p>
    <div class="border-t-2 border-dashed mt-2 mb-2"></div>


    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="rating gap-2">
     <h1 className='text-lg text-black'>{rating}</h1>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />

</div>
    </div>
  </div>
</div>
        </div>
    
    </Link>
    );
};

export default Book;