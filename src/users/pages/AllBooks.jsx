import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

const AllBooks = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col my-5 justify-center items-center '>
        <h1 className='text-4xl'>Collections</h1>
        <div className="flex my-5">
          <input type="text" className="p-2 rounded border text-black w-100 placeholder-gray-600" placeholder='Search by Title' />
          <button className='p-2 text-white bg-blue-900'>Search</button>
        </div>
      </div>

      {/* grid  */}
        <div className="grid grid-cols-3 md:px-40 p-5">
          <div className="col-span-1">
            <h1 className="text-xl font-semibold">Filter</h1>
            <div className="mt-3">
              <input type="radio" name='filter' id='Literary'/>
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default AllBooks
