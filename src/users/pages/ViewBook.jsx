import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faEye } from '@fortawesome/free-solid-svg-icons'


const ViewBook = () => {
    return (
        <>
            <Header/>
            <div className="md:m-10 m-5">
                <div className="border p-5 shadow border-gray-200">
                    <div className="md:grid grid-cols-4 gap-x-10">
                        <div className="col-span-1 ">
                            <img className='w-full' src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="book" />
                        </div>
                        <div className="col-span-3">
                            <div className='flex justify-between '>
                                <h1 className="text-xl font-bold ">Title</h1>
                                <button className='text-gray-300'><FontAwesomeIcon icon={faEye} /></button>
                            </div>
                            <p className='text-blue-700 my-7'>- Author</p>
                            <div className="md:grid grid-cols-3 gap-5 my-10">
                                <p className='font-bold'>Publisher : demo</p>
                                <p className='font-bold'>Language : demo</p>
                                <p className='font-bold'>No of Pages : demo</p>
                                <p className='font-bold'>Seller Mail : demo</p>
                                <p className='font-bold'>Real Price : demo</p>
                                <p className='font-bold'>ISBN : demo</p>
                            </div>
                            <div className="md:my-10 my-4">
                                <p className='text-justify text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem adipisci atque maxime facere cum molestias ab iusto pariatur nihil rem debitis deserunt laudantium vero, officiis sint culpa perferendis. Necessitatibus repellendus eum accusantium aspernatur, quaerat veritatis ipsum? Vitae, magni. Vitae iusto alias provident excepturi impedit error nulla odio tempore modi.</p>
                            </div>
                            <div className="flex justify-end">
                                <button className='p-2 rounded bg-blue-900 text-white'><FontAwesomeIcon icon={faBackward} className='me-3' />Back</button>
                                <button className='p-2 rounded bg-green-900 text-white ms-5'>Buy $ 123</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ViewBook
