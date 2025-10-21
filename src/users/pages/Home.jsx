import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { getHomeBookAPI } from '../../services/allAPI'


const Home = () => {
    const [homeBooks, setHomeBooks] = useState([])

    useEffect(() => {
        getHomeBooks()
    }, [])

    console.log(homeBooks);
    

    const getHomeBooks = async () => {
        try {
            const result = await getHomeBookAPI()
            if (result.status == 200) {
                setHomeBooks(result.data)
            }
        } catch (err) {
            console.log(err);
            
        }
    }
    return (
        <>
            <Header />
            {/* landing  */}
            <div className="flex flex-col h-screen justify-center items-center bg-[url(/bgImage.jpg)] bg-cover bg-center text-white font-bold">
                <div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} className='w-full flex flex-col h-screen justify-center items-center'>
                    <h1 className='text-8xl font-bold'>Wonderful Gifts</h1>
                    <p>Give your family and friends a Book</p>
                    <div className='mt-9'>
                        <input className=' p-2 rounded-3xl bg-white placeholder-gray-500 w-100' type="text" placeholder='Search Books Here....' />
                        <FontAwesomeIcon className=' text-blue-500' icon={faMagnifyingGlass} style={{ marginLeft: "-40px" }} />
                    </div>
                </div>
            </div>
            {/* arrival  */}
            <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
                <h4 className='text-2xl font-bold'>NEW ARRIVAL</h4>
                <h1 className='text-3xl text-center'>Explore Our Latest Collection</h1>
                <div className="md:grid grid-cols-4 w-full mt-5">
                  {  
                  homeBooks.length>0?
                  homeBooks?.map((books, index)=>(
                    <div className="p-3">
                        <div key={index} className="shadow p-3 rounded">
                            <img width={'100%'} height={'300px'} src={books?.imageUrl} alt="book" />
                            <div className="flex flex-col justify-center items-center mt-4">
                                <p className="text-blue-700 font-bold text-lg">{books?.author}</p>
                                <p>{books?.title}</p>
                                <p>Rs {books?.discountPrice}</p>
                            </div>
                        </div>
                    </div>
                  ))
                    :
                    <p>Loading...</p>
                    }
                </div>
                <div className="text-center my-5">
                    <Link to='/all-books' className='text-white p-3 border bg-slate-900'>Explore More...</Link>
                </div>
            </section>
            {/* author  */}
            <section className='md:grid grid-cols-2 gap-2 items-center my-5 md:px-40 p-5'>
                <div className="text-center">
                    <h1 className="text-lg font-medium">FEATURED AUTHORS</h1>
                    <p className="h2 text-xl">Captivates with every word</p>
                    <div className='text-justify mt-5'>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore earum itaque soluta autem placeat delectus! Amet accusamus quidem ad sequi deserunt. Explicabo, animi eaque maiores dolores, qui cumque cupiditate sapiente quo distinctio perspiciatis ea sunt consequuntur possimus, inventore dolorum necessitatibus optio numquam impedit temporibus perferendis iste. Placeat ducimus natus praesentium ad? Vitae molestias nulla cupiditate optio totam est nihil beatae, possimus facere necessitatibus doloribus pariatur quibusdam voluptatum sint ipsum. Aperiam blanditiis harum rerum rem provident placeat reiciendis repudiandae labore est similique laudantium recusandae ipsum quos sit asperiores commodi, autem quae voluptates saepe soluta dolorum qui non atque. Facere, ab fugit?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at nisi exercitationem molestiae quas voluptate eaque asperiores provident vel doloremque, excepturi praesentium itaque maiores necessitatibus rem reiciendis soluta suscipit dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus vero delectus hic pariatur accusamus, nobis dignissimos! Ut, delectus a!</p>
                    </div>
                </div>
                <div className="p-5 flex justify-center items-center gap-10 my-5 md:px-40 ">
                    <img width={'100%'} src="https://i0.wp.com/farbound.net/wp-content/uploads/2024/04/Farbound.Net-Desktop-Wallpaper-Joseph-Konrad-Writer-and-Author-3rd-Dec-1857-Quotation-Konrad-Dream-Preview.jpg?fit=1350%2C844&ssl=1" alt="author" />
                </div>
            </section>
            {/* testimony  */}
            <section className="md:px-40 p-5 flex flex-col justify-center items-center">
                <h4 className='text-2xl font-bold'>TESTIMONIALS</h4>
                <h1 className='text-3xl'>See What Others Are Saying</h1>
                <div className='m-5 flex flex-col justify-center items-center'>
                    <img className='w-100 rounded' src="https://t3.ftcdn.net/jpg/03/59/42/28/360_F_359422840_6ZgJdJS5sOgXeDxYoFMrng55CzyVmK9j.jpg" alt="" />
                    <p className='my-3'>Treesa Joseph</p>
                    <p className='justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut deleniti labore laboriosam eaque repudiandae est, debitis fuga ducimus doloremque mollitia molestias eum voluptatum amet officiis, suscipit laborum excepturi error exercitationem? Ipsam facilis, magni explicabo placeat illum quam exercitationem praesentium. Molestias minus distinctio repellat, sed eaque in corporis tempora nostrum!</p>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Home
