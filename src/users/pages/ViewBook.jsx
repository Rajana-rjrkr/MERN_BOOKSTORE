import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { getSingleBookAPI } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import SERVERURL from '../../services/serverURL'


const ViewBook = () => {
    const [modalStatus, setModalStatus] = useState(false)
    const { id } = useParams()
    const [sBook, setSBook] = useState({})
    console.log(sBook);

    useEffect(() => {
        viewBookDetails()
    }, [])

    const viewBookDetails = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await getSingleBookAPI(id, reqHeader)
                if (result.status == 200) {
                    setSBook(result.data)
                } else if (result.response.this.state == 401) {
                    toast.warning(result.response.data)
                } else {
                    console.log(result);

                }
            } catch (err) {
                console.log(err);

            }
        }
    }

    return (
        <>
            <Header />
            <div className="md:m-10 m-5">
                <div className="border p-5 shadow border-gray-200">
                    <div className="md:grid grid-cols-4 gap-x-10">
                        <div className="col-span-1 ">
                            <img className='w-full' src={sBook.imageUrl} alt="book" />
                        </div>
                        <div className="col-span-3">
                            <div className='flex justify-between '>
                                <h1 className="text-xl font-bold ">{sBook.title}</h1>
                                <button onClick={() => setModalStatus(true)} className='text-gray-300'><FontAwesomeIcon icon={faEye} /></button>
                            </div>
                            <p className='text-blue-700 my-7'>- Author : {sBook?.author}</p>
                            <div className="md:grid grid-cols-3 gap-5 my-10">
                                <p className='font-bold'>Publisher : {sBook?.publisher}</p>
                                <p className='font-bold'>Language : {sBook?.languages}</p>
                                <p className='font-bold'>No of Pages : {sBook?.noOfpages}</p>
                                <p className='font-bold'>Seller Mail : {sBook?.userMail}</p>
                                <p className='font-bold'>Real Price : {sBook?.price}</p>
                                <p className='font-bold'>ISBN : {sBook?.isbn}</p>
                            </div>
                            <div className="md:my-10 my-4">
                                <p className='text-justify text-lg'>{sBook?.abstract}</p>
                            </div>
                            <div className="flex justify-end">
                                <Link to={'/all-books'} className='p-2 rounded bg-blue-900 text-white'><FontAwesomeIcon icon={faBackward} className='me-3' />Back</Link>
                                <button className='p-2 rounded bg-green-900 text-white ms-5'>Buy Rs {sBook?.discountPrice}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {
                modalStatus &&
                <div className="relative z-10" onClick={() => setModalStatus(false)}>
                    <div className="bg-gray-500/75 fixed inset-0">
                        <div className='flex justify-center items-center min-h-screen '>
                            <div className='bg-white rounded-sm md:w-250 w-100'>
                                <div className="bg-slate-900 text-white flex justify-between rounded-sm items-center p-3">
                                    <h1>Book Images</h1>
                                    <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faXmark} />
                                </div>
                                <div className='my-5 ml-5 '>
                                    <p className='text-blue-700 my-5 ml-5'>
                                        <FontAwesomeIcon icon={faCamera} className="me-2" />
                                        Camera click of the book in the hands of Seller
                                    </p>

                                    <div className="md:flex flex-wrap my-4">
                                        {/* duplicate Images */}
                                        {
                                            sBook?.uploadImages?.length > 0 ?
                                                sBook?.uploadImages?.map(img => (
                                                    <img width={'250px'} height={'250px'} className='mx-2' src={`${SERVERURL}/uploads/${img}`} alt="book-images" />

                                                ))
                                            :
                                            <p>User uploaded book images are unavailable..</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default ViewBook
