import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addBookAPI } from '../../services/allAPI'

const Profile = () => {
  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, SetPurchaseStatus] = useState(false)
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfpages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", languages: "", isbn: "", category: "", uploadImages: []
  })
  //console.log(bookDetails);
  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])
  const [token, setToken] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  const handleUploadBookImage = (e) => {
    // console.log(e.target.files[0]);
    const fileArray = bookDetails.uploadImages
    fileArray.push(e.target.files[0])
    setBookDetails({ ...bookDetails, uploadImages: fileArray })
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
    // console.log(url);
    const bookImgArray = previewList
    bookImgArray.push(url)
    setPreviewList(bookImgArray)
  }

  const handleReset = () => {
    setBookDetails({
      title:"",author:"",noOfpages:"",imageUrl:"",price:"",discountPrice:"",abstract:"",publisher:"",languages:"",isbn:"",category:"",uploadImages:[]
    })
    setPreview("")
    setPreviewList([])
  }

  const handleBookSubmit = async () => {
    const { title, author, noOfpages, imageUrl, price, discountPrice, abstract, publisher, languages, isbn, category, uploadImages } = bookDetails

    if (!title || !author || !noOfpages || !imageUrl || !price || !discountPrice || !abstract || !publisher || !languages || !isbn || !category || uploadImages.length == 0) {
      toast.info("Please fill the form")
    } else {
      // api call
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      const reqBody = new FormData()
      //append : reqBody.append(key,value)
      for (let key in bookDetails) {
        if (key != "uploadImages") {
          reqBody.append(key, bookDetails[key])
        } else {
          bookDetails.uploadImages.forEach(img => {
            reqBody.append("uploadImages", img)
          })
        }
      }
      try {
        const result = await addBookAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 401) {
          toast.warning(result.response.data)
          //clear all field
          handleReset()
        } else if (result.status == 200) {
          toast.success("Book added successfully")
          //clear all field
          handleReset()
        } else {
          toast.error("Something went wrong")
          //clear all field
          handleReset()
        }
      } catch (err) {
          console.log(err);
          
      }
    }
  }

  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className="bg-slate-900"></div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130PX' }} className="bg-white p-3">
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" alt="profile" />
      </div>
      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex justify-center items-center">
          <h1 className="font-bold md:text-3xl text-2xl">Username</h1>
          <FontAwesomeIcon className='ms-3 text-blue-700' icon={faCircleCheck} />
        </div>
        <div>Edit</div>
      </div>
      <p className="md:px-20 px-5 my-5 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo nesciunt porro ipsa autem ab fuga alias nemo voluptatibus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro repellendus officiis iste ipsa eligendi? Dolorum quo laborum corrupti harum quos? Quaerat, aliquid facilis! Nulla consequatur repellendus dicta! Quo, pariatur!
      </p>
      <div className="md:px-40">
        {/* tabs  */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={() => { setSellBookStatus(true); setBookStatus(false); SetPurchaseStatus(false) }} className={sellBookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Sell Books</p>
          <p onClick={() => { setBookStatus(true); SetPurchaseStatus(false); setSellBookStatus(false) }} className={bookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Book Status</p>
          <p onClick={() => { SetPurchaseStatus(true); setSellBookStatus(false); setBookStatus(false) }} className={purchaseStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Purchase History</p>
        </div>

        {/* contents  */}
        {/* sell books  */}
        {
          sellBookStatus &&
          <div>
            <div className="p-10 my-20 mx-5 bg-gray-200">
              <div className="text-center text-3xl font-medium">Book Details</div>
              <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className='px-3'>
                  <div className="mb-3">
                    <input value={bookDetails.title} onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder="Title" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                  <div className="mb-3">
                    <input value={bookDetails.author} onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder="Author" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                  <div className="mb-3">
                    <input value={bookDetails.noOfpages} onChange={e => setBookDetails({ ...bookDetails, noOfpages: e.target.value })} type="text" placeholder="No. of Pages" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                  <div className="mb-3">
                    <input value={bookDetails.imageUrl} onChange={e => setBookDetails({ ...bookDetails, imageUrl: e.target.value })} type="text" placeholder="Image URL" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                  <div className="mb-3">
                    <input value={bookDetails.price} onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder="Price" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                  <div className="mb-3">
                    <input value={bookDetails.discountPrice} onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder="Discount Price" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                  <div className="mb-3">
                    <textarea value={bookDetails.abstract} onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} type="text" placeholder="Abstract" rows={'5'} className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                </div>
                <div className='px-3'>
                  <div className="mb-3">
                    <input value={bookDetails.publisher} onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder="Publisher" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                  <div className="mb-3">
                    <input value={bookDetails.languages} onChange={e => setBookDetails({ ...bookDetails, languages: e.target.value })} type="text" placeholder="Language" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                  <div className="mb-3">
                    <input value={bookDetails.isbn} onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder="ISBN" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                  <div className="mb-3">
                    <input value={bookDetails.category} onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder="Category" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" />
                  </div>
                  <div className="mb-3 flex justify-center items-center mt-10">
                    <label htmlFor="bookImage">
                      <input onChange={e => handleUploadBookImage(e)} type="file" id='bookImage' name='' className='hidden' />
                      {!preview ?
                        <img width={'250px'} height={'250px'} src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="" />
                        :
                        <img width={'250px'} height={'250px'} src={preview} alt="" />
                      }
                    </label>

                  </div>
                  {preview &&
                    <div className=" flex justify-center items-center">
                      {
                        previewList?.map((imgUrl,index) => (
                          <img key={index} width={'70px'} height={'70px'} src={imgUrl} alt="book" className='mx-3' />
                        ))
                      }
                      {previewList.length < 3 &&
                        <label htmlFor="bookImage">
                          <input onChange={e => handleUploadBookImage(e)} type="file" id='bookImage' name='' className='hidden' />
                          <FontAwesomeIcon icon={faSquarePlus} className='fa-2x  ms-3 text-gray-500' />
                        </label>
                      }
                    </div>
                  }
                </div>
              </div>

              {/* footer  */}
              <div className="p-3 w-full flex md:justify-end justify-center my-8">
                <button onClick={handleReset} className='py-2 px-3 rounded text-white bg-gray-600 hover:bg-white hover:border hover:text-black'>Reset</button>
                <button onClick={handleBookSubmit} className='py-2 px-3 rounded text-white bg-blue-600 ms-3 hover:bg-white hover:border hover:text-blue-600 hover:border-blue-600'>Submit</button>
              </div>
            </div>
          </div>
        }
        {/* Book Status  */}
        {
          bookStatus &&
          <div className='p-10 my-20 shadow rounded'>
            {/* duplicate div according to book  */}
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className="text-2xl">Book Title</h1>
                  <h2 className='text-xl'>Author</h2>
                  <h3 className='text-blue-500 text-lg'>$ 300</h3>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam ad tempora maxime consectetur qui cum enim eius voluptatum? Obcaecati pariatur numquam dolorem sint, praesentium architecto porro, hic inventore sed deserunt reiciendis deleniti debitis modi cupiditate quia veritatis reprehenderit molestias!</p>
                  <div className="flex mt-3">
                    <img width={'200px'} height={'150px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" />
                  </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                  <img className='w-full' src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="" />
                  <div className='mt-4 flex justify-end'>
                    <button className='rounded text-white p-2 bg-red-500 hover:bg-red-600'>Delete</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        }
        {/* Purchase History  */}
        {
          purchaseStatus &&
          <div className='p-10 my-20 shadow rounded'>
            {/* duplicate div according to book  */}
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className="text-2xl">Book Title</h1>
                  <h2 className='text-xl'>Author</h2>
                  <h3 className='text-blue-500 text-lg'>$ 300</h3>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam ad tempora maxime consectetur qui cum enim eius voluptatum? Obcaecati pariatur numquam dolorem sint, praesentium architecto porro, hic inventore sed deserunt reiciendis deleniti debitis modi cupiditate quia veritatis reprehenderit molestias!</p>
                  <div className="flex mt-3">
                    <img width={'250px'} height={'150px'} src="https://www.pngplay.com/wp-content/uploads/6/Sold-Out-Stamp-PNG.png" alt="sold png" />
                  </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                  <img className='w-full' src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="" />
                </div>

              </div>
            </div>
          </div>
        }

      </div>

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

export default Profile
