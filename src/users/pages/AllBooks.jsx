import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AllBooks = () => {
  const [listStatus, setListStatus] = useState(false)
  return (
    <>
      <Header />
      <div className='flex flex-col my-5 justify-center items-center '>
        <h1 className='text-3xl font-semibold'>Collections</h1>
        <div className="flex my-5">
          <input type="text" className="p-2 rounded border text-black w-100 placeholder-gray-600" placeholder='Search by Title' />
          <button className='p-2 text-white bg-blue-700'>Search</button>
        </div>
      </div>

      {/* grid  */}
      <div className="md:grid grid-cols-4 md:px-20 p-5">
        {/* filter  */}
        <div className="col-span-1">
          <div className='flex justify-between'>
            <h1 className="text-xl font-semibold">Filter</h1>
            <button onClick={() => setListStatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} /></button>
          </div>
          <div className={listStatus?'block':'md:block hidden'}>
            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Philosophy</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Romance</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Mystery / Thriller</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Horror</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Auto / Biography</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Self Help</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Politics</label>
            </div>
          </div>
        </div>

        {/* Books  */}
        <div className="col-span-3">
          <div className="md:grid grid-cols-4">

            <div className="shadow p-3 rounded mx-4">
              <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p>Book Title</p>
                <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
              </div>
            </div>

            <div className="shadow p-3 rounded mx-4">
              <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p>Book Title</p>
                <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
              </div>
            </div>

            <div className="shadow p-3 rounded mx-4">
              <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p>Book Title</p>
                <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
              </div>
            </div>

            <div className="shadow p-3 rounded mx-4">
              <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p>Book Title</p>
                <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AllBooks
