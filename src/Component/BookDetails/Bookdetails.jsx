import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addtoStoreReadList } from '../../Utiliti/addtoDb';


const Bookdetails = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)
    console.log(bookId);
    const data = useLoaderData()
    console.log(data);
    const book = data.find(book=> book.bookId === id)
    const handleAddtoMark =(id)=>{
       addtoStoreReadList(id)
    }
    return (
        <div>
           <div className="hero flex flex-col md:flex-row gap-5 p-5">
  <div className=" bg-gray-100 rounded-lg p-8 md:p-14 lg:p-24  flex-col lg:flex-row">
    <img
      src={book.image}
      className="max-w-sm rounded-lg shadow-2xl" />
  </div>
  <div className='space-y-4'>
      <h1 className="text-4xl font-bold">The Catcher in the Rye</h1>
      <h1 className='text-2xl font-semibold text-gray-500'>By: {book.author}</h1>
      <div class="border-t-2 mt-2 mb-2"></div>
      <h1 className='text-2xl'>{book.category}</h1>
      <div class="border-t-2 mt-2 mb-2"></div>
      <p className='text-lg text-justify'> <span className='font-bold'>Review: </span>
        {book.review}
      </p>
      <div className='flex gap-10 items-center'>
        
            <span className='text-black text-base font-bold'>Tag</span>
    
        {
            book.tags.map(tag=> <button className='rounded-full bg-gray-100 text-green-400 font-semibold text-base p-2 '>#{tag}</button>)
        }
            
      </div>
      <div class="border-t-2 mt-2 mb-2"></div>
      <div className='flex gap-10'>
      <div className='mb-2'>
       <h1>Number of Page</h1>
       <h1>Publisher </h1>
       <h1>Year of Publishing </h1>
       <h1>Rating</h1>
      </div>
      <div className='mb-2'>
      <p>{book.totalPages}</p>
       <p>{book.publisher}</p>
       <p>{book.yearOfPublishing}</p>
       <p>{book.rating}</p>
      </div>
      </div>
     <div className='gap-5 flex'>
        <button className='rounded-lg border p-2' onClick={()=>handleAddtoMark(bookId)}>Mark as Read</button>
        <button className='rounded-lg font-bold text-white p-2 bg-cyan-500'>WhishList</button>
     </div>
    </div>
</div>

        </div>
    );
};

export default Bookdetails;