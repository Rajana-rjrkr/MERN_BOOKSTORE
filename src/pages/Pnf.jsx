import React from 'react'

const Pnf = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <img width={'400'} src="https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif" alt="" />
                <p className='text-lg font-bold'>Oh No !</p>
                <p className='text-5xl my-2'>Look Like You're Lost</p>
                <p className='text-lg'>The page you are looking for is not available</p>
                <button className='bg-blue-500 border rounded p-2 text-white my-2 hover:bg-blue-700'>Back to Home</button>
            </div>
        </>
    )
}

export default Pnf
