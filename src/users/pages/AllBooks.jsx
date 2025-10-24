import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast, ToastContainer } from 'react-toastify'
import { getAllBooksAPI } from '../../services/allAPI'
import { searchBookContext } from '../../contextAPI/ContextShare'


const AllBooks = () => {
  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [abooks, setABooks] = useState([])
  const [tempBooks, setTempBooks] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const {searchKey, setSearchKey} = useContext(searchBookContext)

  console.log(abooks);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks(userToken)
    }
  }, [searchKey])

  const getAllBooks = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllBooksAPI(searchKey, reqHeader)
      if (result.status == 200) {
        setABooks(result.data)
        setTempBooks(result.data)
        const tempCategory = result.data.map(item => item.category)
        // console.log(tempCategory);
        const tempArray = [...new Set(tempCategory)]
        // console.log(tempArray);
        setAllCategories(tempArray)
      } else {
        console.log(result);
        toast.warning(result.response.data)
      }
    } catch (err) {
      console.log(err);

    }
  }

  //filter according to book category
  const filterBooks = (category) => {
    if (category == "No-Filter") {
      setABooks(tempBooks)
    } else {
      setABooks(tempBooks?.filter(item => item.category.toLowerCase() == category.toLowerCase()))
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
                <input value={searchKey} type="text" className="p-2 rounded border text-black w-100 placeholder-gray-600" placeholder='Search by Title' onChange={e => setSearchKey(e.target.value)} />
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

                  {
                    allCategories?.length > 0 &&
                    allCategories?.map((category, index) => (
                      <div key={index} className="mt-3">
                        <input type="radio" name='filter' id={category} onClick={() => filterBooks(category)} />
                        <label className='ms-3' htmlFor={category}>{category}</label>
                      </div>
                    ))

                  }

                  <div className="mt-3">
                    <input type="radio" name='filter' id='No-Filter' onClick={() => filterBooks("No-Filter")} />
                    <label className='ms-3' htmlFor="No-Filter">No-Filter</label>
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
