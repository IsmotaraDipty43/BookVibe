import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setbooks] = useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res=>res.json())
        .then(data=>setbooks(data))
    },[])
    return (
        <div className='mb-10'>
            <h2 className='font-bold text-5xl text-black text-center'>Books</h2>
            <div className='md:p-0 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;