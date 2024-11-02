import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utiliti/addtoDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readlist, setReadList] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedList = getStoreReadList();
        const storedListInt = storedList.map(id => parseInt(id, 10));
        const bookList = allBooks.filter(book => storedListInt.includes(book.bookId));
        setReadList(bookList);
    }, [allBooks]);

    const [sort, setSort] = useState('');
    const handleSort = (sortType) => {
        setSort(sortType);

        if (sortType === 'No of Pages') {
            const sortedReadList = [...readlist].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }
        // Optionally handle sorting by 'Rating'
        if (sortType === 'Rating') {
            const sortedReadList = [...readlist].sort((a, b) => b.rating - a.rating); // Assuming books have a 'rating' property
            setReadList(sortedReadList);
        }
    };

    return (
        <div>
            <h3 className='my-8'>Listed books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {sort ? `Sort By ${sort}` : 'Sort By'}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Rating')}><a>Rating</a></li>
                    <li onClick={() => handleSort('No of Pages')}><a>Number of Pages</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read: {readlist.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        readlist.map(book => <Book key={book.bookId} book={book} />)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>Books I read later</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
