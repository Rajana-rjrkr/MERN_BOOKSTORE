import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

function PaymentSuccess() {
    return (
        <>
            <Header />
            <div className="container my-10 min-h-screen">
                <div className="md:grid md:grid-cols-2 px-20 justify-center items-center my-10">
                    <div>
                        <h1 className='md:text-4xl font-bold text-blue-600'>Congratulations!!</h1>
                        <p className='text-2xl my-10'>Thankyou for Purchasing with BookStore. Hope you have a good time with us</p>
                        <Link to={'/all-books'} className='text-blue-600 border bg-blue-700 text-white border-blue-600 rounded p-3 hover:text-white hover:bg-blue-600'>< FontAwesomeIcon icon={faBackward} className='me-5' />Explore More...</Link>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src="https://assets-v2.lottiefiles.com/a/4be07634-1164-11ee-b1d8-bfe6d477950f/dnwgdCHobx.gif" alt="success" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PaymentSuccess
