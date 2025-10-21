import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast, ToastContainer } from 'react-toastify'
import { getAllBooksAPI } from '../../services/allAPI'


const AllBooks = () => {
  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [abooks, setABooks] = useState([])

  console.log(abooks);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks(userToken)
    }
  }, [])

  const getAllBooks = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllBooksAPI(reqHeader)
      if (result.status == 200) {
        setABooks(result.data)
      } else {
        console.log(result);
        toast.warning(result.response.data)
      }
    } catch (err) {
      console.log(err);

    }
  }

  return (
    <>
      <Header />
      {
        token ?
          <>
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
                <div className={listStatus ? 'block' : 'md:block hidden'}>
                  <div className="mt-3">
                    <input type="radio" name='filter' id='Literary' />
                    <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
                  </div>

                  <div className="mt-3">
                    <input type="radio" name='filter' id='Philosophy' />
                    <label className='ms-3' htmlFor="Philosophy">Philosophy</label>
                  </div>

                  <div className="mt-3">
                    <input type="radio" name='filter' id='Romance' />
                    <label className='ms-3' htmlFor="Romance">Romance</label>
                  </div>

                  <div className="mt-3">
                    <input type="radio" name='filter' id='Mystery' />
                    <label className='ms-3' htmlFor="Mystery">Mystery / Thriller</label>
                  </div>

                  <div className="mt-3">
                    <input type="radio" name='filter' id='Horror' />
                    <label className='ms-3' htmlFor="Horror">Horror</label>
                  </div>

                  <div className="mt-3">
                    <input type="radio" name='filter' id='Auto / Biography' />
                    <label className='ms-3' htmlFor="Auto / Biography">Auto / Biography</label>
                  </div>

                  <div className="mt-3">
                    <input type="radio" name='filter' id='Self Help' />
                    <label className='ms-3' htmlFor="Self Help">Self Help</label>
                  </div>

                  <div className="mt-3">
                    <input type="radio" name='filter' id='Politics' />
                    <label className='ms-3' htmlFor="Politics">Politics</label>
                  </div>
                </div>
              </div>

              {/* Books  */}
              <div className="col-span-3">
                <div className="md:grid grid-cols-4">
                  {
                    abooks.length > 0 ?
                      abooks?.map(books => (
                        <div key={abooks?._id} className="shadow p-3 rounded mx-4 my-3">
                          <img width={'100%'} height={'300px'} src={books?.imageUrl} alt="book" />
                          <div className="flex flex-col justify-center items-center">
                            <p className="text-blue-700 font-bold">{books?.author.slice(0, 20)}</p>
                            <p>{books?.title.slice(0, 20)}</p>
                            <Link to={`/books/${books?._id}/view`} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
                          </div>
                        </div>
                      ))
                      :
                      <p>No Books</p>

                  }

                </div>
              </div>
            </div>
          </>
          :

          <div className='my-10 flex justify-center items-center flex-col '>
            <img className='w-75' src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" alt="lock" />
            <p className="font-semibold text-lg">Please<Link to={'/login'} className='text-blue-700 font-bold'> Login </Link>To Explore More.....</p>
          </div>



      }
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default AllBooks
