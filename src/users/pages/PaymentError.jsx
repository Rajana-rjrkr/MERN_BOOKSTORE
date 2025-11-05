import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'


function PaymentError() {
    return (
        <>
            <Header />
            <div className="container my-10 min-h-screen">
                <div className="md:grid md:grid-cols-2 px-20 justify-center items-center my-10">
                    <div>
                        <h1 className='md:text-4xl text-red-600 font-bold'>Sorry! Your Payment is Unsuccessfull</h1>
                        <p className='text-2xl my-10'>We Apologize for the inconvience caused and appreciate your visit to bookstore.</p>
                        <Link to={'/all-books'} className='text-blue-600 border bg-blue-700 text-white border-blue-600 rounded p-3 hover:text-white hover:bg-blue-600'>< FontAwesomeIcon icon={faBackward} className='me-5' />Explore More...</Link>
                    </div>
                    <div className='flex justify-center md:mt-0 mt-20 items-center'>
                        <img src="https://cdn.dribbble.com/userupload/42295887/file/original-2e27796737e975dc1e453c3b72df2a3d.gif" alt="error" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PaymentError
